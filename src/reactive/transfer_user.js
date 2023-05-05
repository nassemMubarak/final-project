import {reactive} from 'vue'

export const transUser = reactive({
    "_id": "",
    "name": "",
    "email": "",
    "phone": "",
    "verifyEmail": false,
    "token": ""
})
export function updateTransUser(updatedData) {
    transUser._id = updatedData._id || transUser._id
    transUser.name = updatedData.name || transUser.name
    transUser.email = updatedData.email || transUser.email
    transUser.phone = updatedData.phone || transUser.phone
    transUser.verifyEmail = updatedData.verifyEmail || transUser.verifyEmail
    transUser.token = updatedData.token || transUser.token
  }