import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import * as React from 'react';



type PropsType = {
    totalPages: number,
    page: number,
    handleChange: (event: React.ChangeEvent<unknown>, value: number) => void
}

export default function BasicPagination(props: PropsType) {
    return (
        <Stack spacing={2}  >
            <Pagination count={props.totalPages}
                style={{
                    backgroundColor: "black",
                    color: "color",
                    marginBottom: "100px",
                    marginTop: "20px",
                    display: "flex",
                    justifyContent: "center",
                }
                }
                variant="outlined"
                color="primary"
                page={props.page}
                onChange={props.handleChange}
                hideNextButton
                hidePrevButton
            />
        </Stack >
    );
}