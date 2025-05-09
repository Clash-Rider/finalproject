const conf={
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectid: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseid: (import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionid: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketid: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    tinymceAPI: String(import.meta.env.VITE_TINYMCE_API_KEY),
}


export default conf;