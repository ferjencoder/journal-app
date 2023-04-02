

export const fileUpload = async ( file ) => {

    if ( !file ) throw new Error( 'No se cargó ningún archivo.' )

    const cloudUrl = 'https://api.cloudinary.com/v1_1/ferjen/upload';

    const formData = new FormData();
    formData.append( 'upload_preset', 'journal' )
    formData.append( 'file', file );

    try {

        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        } );

        if ( !resp.ok ) throw new Error( 'No se pudo cargar ningún archivo.' )
        const cloudResp = await resp.json();

        return cloudResp.secure_url;

    } catch ( error ) {

        console.log( error );
        throw new Error( error.message );

    }

};


// export const fileUpload = async ( file ) => {
//     if ( !file ) throw new Error( 'No tenemos ningúna archivo a subir' );

//     const cloudUrl = 'https://api.cloudinary.com/v1_1/ferjen/upload';

//     const formData = new FormData();
//     formData.append( 'upload_preset', 'journal' );
//     formData.append( 'file', file );

//     try {

//         const resp = await fetch( cloudUrl, {
//             method: 'POST',
//             body: formData
//         } );


//         if ( !resp.ok ) throw new Error( 'No se pudo subir imagen' )
//         const cloudResp = await resp.json();

//         return cloudResp.secure_url;

//     } catch ( error ) {
//         console.log( error );
//         throw new Error( error.message );
//     }

// }