

import { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DeleteOutline, SaveOutlined, UploadOutlined } from '@mui/icons-material';
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css'

import { useForm } from '../../hooks';
import { ImageGallery } from '../components';
import { startSaveNote, setActiveNote, startUploadingFiles, startDeletingNote } from '../../store/journal';


export const NoteView = () => {

    const dispatch = useDispatch();

    const { active: note, messageSaved, isSaving } = useSelector( state => state.journal );

    const { body, title, date, onInputChange, formState } = useForm( note );

    const dateString = useMemo( () => {
        const newDate = new Date( date );
        return newDate.toUTCString()
    }, [ date ] )

    const fileInputRef = useRef();

    useEffect( () => {

        dispatch( setActiveNote( formState ) );
    }, [ formState ] )

    useEffect( () => {

        if ( messageSaved.length > 0 ) {
            Swal.fire( 'Nota actualizada', messageSaved, 'success' )
        }
        // dispatch( setActiveNote( formState ) );
    }, [ messageSaved ] )

    const onSaveNote = () => {

        dispatch( startSaveNote() );
    };

    const onFileInputChange = ( { target } ) => {

        if ( target.files === 0 ) return;
        dispatch( startUploadingFiles( target.files ) );
    }

    const onDeleteNote = () => {
        dispatch( startDeletingNote() );
    };

    return (

        <Grid
            className="animate__animated animate__fadeIn animate__faster"
            container
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            sx={{ mb: 1 }}
        >

            <Grid item>
                <Typography fontSize={39} fontWeight='light' >{dateString}</Typography>
            </Grid>

            <Grid item>

                <input
                    type="file"
                    multiple
                    onChange={onFileInputChange}
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                />

                <IconButton
                    color="success"
                    disabled={isSaving}
                    // este onClick simula el click en el input file displayed none
                    onClick={() => fileInputRef.current.click()}
                    sx={{ padding: 2 }}
                >
                    <UploadOutlined />
                </IconButton>

                <Button
                    disabled={isSaving}
                    onClick={onSaveNote}
                    color="success"
                    sx={{ padding: 2 }}
                >
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
            </Grid>

            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese un título"
                    label="Título"
                    sx={{ border: 'none', mb: 1 }}
                    name="title"
                    value={title}
                    onChange={onInputChange}
                />

                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Qué sucedió en el día de hoy?"
                    minRows={5}
                    name="body"
                    value={body}
                    onChange={onInputChange}
                />
            </Grid>

            <Grid container justifyContent='center'>
                <Button
                    // disabled={isSaving}
                    onClick={onDeleteNote}
                    color="error"
                    sx={{ mt: 2 }}
                >
                    <DeleteOutline />
                    Borrar
                </Button>

            </Grid>

            <ImageGallery images={note.imageUrls} />

        </Grid>
    )
}
