
// import { v2 as cloudinary } from 'cloudinary';
// import { fileUpload } from '../../../src/journal/helpers/fileUpload';

// cloudinary.config( {
//     cloud_name: 'ferjen',
//     api_key: '112442462845697',
//     api_secret: 'BVpgABa8kBHNdMh-8T_SOSQhn3U',
//     secure: true
// } );

// describe( 'Pruebas en fileUpload.js', () => {

//     test( 'debe de subir el archivo correctamente a Cloudinary', async () => {

//         const imageUrl = 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png';
//         const resp = await fetch( imageUrl );
//         const blob = await resp.blob();
//         const file = new File( [ blob ], 'photo.jpg' )

//         const url = await fileUpload( file );

//         expect( typeof url ).toBe( 'string' );

//         // console.log( url );

//         const segments = url.split( '/' );
//         const imageId = segments[ segments.length - 1 ].replace( '.png', '' );

//         const folderName = "journal-app"

//         const cloudResp = await cloudinary.api.delete_resources(
//             `${folderName}/${imageId}`,
//             ( error, result ) => {
//                 // console.log( error, result );
//             }
//         );

//         // const cloudResp = await cloudinary.api.delete_resources( [ 'journal/' + imageId ], {
//         //     resource_type: 'image'
//         // } );

//         // console.log( cloudResp );

//     } );

//     test( 'debe de retornar null', async () => {

//         const file = new File( [], 'photo.jpg' )

//         const url = await fileUpload( file );

//         expect( url ).toBe( null );

//     } );

// } );

describe( 'Prueba en fileUpload', () => {
    test( 'random test', () => {
        console.log( 'test' );

    } )
} )