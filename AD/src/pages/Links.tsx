import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import { RouteComponentProps } from "react-router-dom";
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TablePagination,
    TableRow,
} from "@mui/material";

import Layout from "../components/Layout";
import { Link } from "../models/link";

interface RouteParams {
    id: string;
}

interface LinksProps extends RouteComponentProps<RouteParams> {}

const Links: FC<LinksProps> = (props) => {
    const [links, setLinks] = useState<Link[]>([]);
    const [page, setPage] = useState(0);
    const perPage = 10;

    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`/user/${props.match.params.id}/links`);
            setLinks(data);
        })();
    }, []);

    return (
        <Layout>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Code</TableCell>
                        <TableCell>Count</TableCell>
                        <TableCell>Revenue</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {links.slice(page * perPage, (page + 1) * perPage).map((link) => (
                        <TableRow key={link.id}>
                            <TableCell>{link.id}</TableCell>
                            <TableCell>{link.code}</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TablePagination
                        count={links.length}
                        page={page}
                        onPageChange={(e, newPage) => setPage(newPage)}
                        rowsPerPage={perPage}
                        rowsPerPageOptions={[]}
                    />
                </TableFooter>
            </Table>
        </Layout>
    );
};

export default Links;
