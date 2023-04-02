import { TurnedInNot } from "@mui/icons-material"
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux";
import { setActiveNote } from "../../store/journal/journalSlice";


export const SideBarItem = ( { title = '', body, id, date, imageUrls = [] } ) => {

    const dispatch = useDispatch();

    const onClickNote = () => {
        dispatch( setActiveNote( { title, body, id, date, imageUrls } ) )
    };

    const newTitle = useMemo( () => {

        return title.length > 25
            ? title.substring( 0, 25 ) + '...'
            : title

    }, [ title ] )

    const newBody = useMemo( () => {

        return body.length > 75
            ? body.substring( 0, 75 ) + '...'
            : body

    }, [ body ] )

    return (

        <ListItem
            onClick={onClickNote}
            disablePadding
        >

            <ListItemButton>

                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>

                <Grid container direction="column" alignItems="flex-start">
                    <ListItemText primary={newTitle} />
                    <ListItemText secondary={newBody} />
                    {/* <ListItemText secondary={date} /> */}
                </Grid>

            </ListItemButton>

        </ListItem>
    )
}



