import http from '../http-common'

const STORAGE_API_URL = `${process.env.REACT_APP_BLOG_API_URL}/storage`

interface SaveFileToS3Response {
  objectKey: string
}

class StorageService {
  getBase64 = async (file: File): Promise<string | unknown> =>
    await new Promise(function (resolve, reject) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = (error) => reject(error)
    })

  saveFileToS3 = async (file: File): Promise<string | undefined> => {
    try {
      const base64File = await this.getBase64(file)
      const response = await http.post<SaveFileToS3Response>(
        STORAGE_API_URL,
        JSON.stringify({ content: base64File })
      )
      return response.data.objectKey
    } catch (err) {
      console.log(`Failed to save file to S3 bucket: ${err as string}`)
    }
  }
}

export default StorageService
