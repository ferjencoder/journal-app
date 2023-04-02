

import { useDispatch, useSelector } from "react-redux";
import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";

import { JournalLayout } from "../layout";
import { NoteView, NothingSelectedView } from "../views";
import { startNewNote } from "../../store/journal/thunks";


export const JournalPage = () => {

    const { isSaving, active } = useSelector( state => state.journal );
    const dispatch = useDispatch();

    const onClickNewNote = () => {
        dispatch( startNewNote() )
    };

    return (

        <JournalLayout>

            {
                ( !!active )
                    ? <NoteView />
                    : <NothingSelectedView />
            }

            <IconButton
                onClick={onClickNewNote}
                size="large"
                disabled={isSaving}
                sx={{
                    color: "white",
                    backgroundColor: "error.main",
                    ":hover": { backgroundColor: "error.main", opacity: 0.9 },
                    position: "fixed",
                    right: 50,
                    bottom: 50,
                    "&:disabled": {
                        color: "grey.400",
                        backgroundColor: "#32317a"
                    }
                }}
            >
                <AddOutlined sx={{ fontSize: 20 }} />
            </IconButton>

        </JournalLayout>
    )

}



