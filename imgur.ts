import axios from 'axios'

/* 
    This is a reference document for how to perform certain functions using Imgur's API
    Deprecated API Docs: https://api.imgur.com/endpoints
    New API Docs: https://apidocs.imgur.com/

    To register an application and obtain a Cliend ID: https://api.imgur.com/oauth2/addclient
    To manage your applications: https://imgur.com/account/settings/apps

    To obain an access token and a refresh token: https://apidocs.imgur.com/#authorization-and-oauth
        - Go to https://api.imgur.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&response_type=token
        - Authorize your application
        - Grab your access token and refresh token from the resulting URL or from the response
*/

/**
 * @param image - Binary file, base64 data, or url for an image/video (up to 10mb)
 * @param album - ID of the album you want to add the image/video to. Deletehash for anonymous albums
 * @param name - Name of the file
 */
interface imgurImgInfo {
    image: string
    album?: string
    type?: 'file' | 'url' | 'base64' | 'raw'
    name?: string
    title?: string
    description?: string
}
/**
 * Upload an image to Imgur
 */
function uploadImage(imgInfo: imgurImgInfo, accessToken?: string, clientID?: string) {
    const endpoint = 'https://api.imgur.com/3/image'

    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}` // Upload to account
            // Authorization: `Client-ID ${clientID}` // Upload Anonymously
        }
    }

    axios.post(endpoint, imgInfo, config).catch(err => console.error(err))
}

/**
 * Adds an image to an album. The image(s) must already exist on your account before you can add it to an album.
 */
function addImageToAlbum(imgIDs: string, albumID: string, accessToken?: string, clientID?: string) {
    const endpoint = `https://api.imgur.com/3/album/${albumID}/add`

    const images = {
        'ids': imgIDs // For images in your account
        // 'deletehashes': imgIDs // For anonymously uploaded images
    }

    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}` // Upload to account
            // Authorization: `Client-ID ${clientID}` // Upload Anonymously
        }
    }

    axios.post(endpoint, images, config).catch(err => console.error(err))
}


/**
 * Generates an Imgur access token using a user's refresh token
 */
async function getAccessToken(refreshToken: string, cliendID: string, clientSecret: string) {
    const params = {
        refresh_token: refreshToken, 
        client_id: cliendID,
        client_secret: clientSecret,
        grant_type: 'refresh_token'
    }

    const { data: { access_token } } = await axios.post('https://api.imgur.com/oauth2/token', params)
    
    return access_token
}