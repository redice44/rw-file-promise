import * as fs from 'fs';

export const readFile = ( fileName: string, opts = {} ): Promise < string|Buffer > =>

  new Promise ( ( resolve: ( data: string|Buffer ) => void, reject ) => {

    fs.readFile( fileName, opts, ( err, data ) => {

      err ? reject( err ) : resolve( data );

    } );

  } );

export const writeFile = ( fileName: string, data: string|Buffer, opts = {} ): Promise < string|Buffer > =>

  new Promise ( ( resolve, reject ) => {

    fs.writeFile( fileName, data, opts, err => {

      err ? reject( err ) : resolve( data );

    } );

  } );
