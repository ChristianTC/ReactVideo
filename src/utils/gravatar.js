import md5 from 'md5';

const gravatar = (email) => {
    // url que utilizaremos como la base de la imagen
    const base = 'https://gravatar.com/avatar/';
    //formatear correo; trim elimina espacios; y volverlo a minusculas
    const formatteEmail = (email).trim().toLowerCase();
    // en vez de aroba pasamos el encoding binary
    const hash = md5(formatteEmail, { encoding: "binary" });
    
    return `${base}${hash}`;
}