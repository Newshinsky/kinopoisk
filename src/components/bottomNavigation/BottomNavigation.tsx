import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import TvIcon from '@mui/icons-material/Tv';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import * as React from 'react';
import { useNavigate } from 'react-router';


export default function LabelBottomNavigation() {
    const [value, setValue] = React.useState('/');
    let navigate = useNavigate();


    const handleChange = (event: React.SyntheticEvent, newValue: string) => {

        setValue(newValue);
        if (newValue === "/") {
            navigate('/')
        }
        if (newValue === "Films") {
            navigate('/films')
        }
        if (newValue === "TV Serials") {
            navigate('/tvSerials')
        }
        if (newValue === "Search") {
            navigate('/search')
        }
    };

    return (
        <BottomNavigation
            sx={{
                width: "100%",
                left: "0",
                bottom: "0",
                display: "flex",
                position: "fixed",
                backgroundColor: "black",
                zIndex: "100"
            }}
            value={value}
            onChange={handleChange}>
            <BottomNavigationAction
                style={{
                    color: "#f9004d"
                }}
                label="Trending"
                value="/"
                icon={<WhatshotIcon />}
            />
            <BottomNavigationAction
                style={{
                    color: "#f9004d"
                }}
                label="Films"
                value="Films"
                icon={<MovieIcon />}
            />
            <BottomNavigationAction
                style={{
                    color: "#f9004d"
                }}
                label="TV Serials"
                value="TV Serials"
                icon={<TvIcon />}
            />
            <BottomNavigationAction
                style={{
                    color: "#f9004d"
                }}
                label="Search"
                value="Search"
                icon={<SearchIcon />} />
        </BottomNavigation>
    );
}

