import * as CryptoJS from "crypto-js";
const iv = CryptoJS.enc.Utf8.parse('hebeifangjiangkj');
const key = CryptoJS.enc.Utf8.parse('hebeifangjiangkj');
const mode = CryptoJS.mode.CBC;
const padding = CryptoJS.pad.Pkcs7;

export function encrypt(text: string) {
    return CryptoJS.AES.encrypt(text, key,{ iv, mode, padding}).ciphertext.toString()
}

export function decrypt(text: string) {
    const bytes =  CryptoJS.AES.decrypt(text, key, { iv, mode, padding});
    return JSON.parse(bytes.toString())
}