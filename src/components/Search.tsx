import { TextField } from "@mui/material";
import { FC } from "react";

type SearchProps = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
};

export const Search: FC<SearchProps> = ({ onChange, value }) => {
    return (
        <TextField
            label="search"
            variant="standard"
            fullWidth
            type="search"
            value={value}
            onChange={onChange}
            sx={{
                mb: "1.5rem"
            }}
        />
    );
};
