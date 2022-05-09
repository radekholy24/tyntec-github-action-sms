import {AxiosRequestConfig} from 'axios'

export function composeSendMessageRequestAxiosConfig(
  apikey: string,
  data: WhatsAppTemplateMessage
): AxiosRequestConfig {
  return {
    method: 'post',
    url: 'https://api.tyntec.com/conversations/v3/messages',
    headers: {
      accept: 'application/json',
      apikey,
      'content-type': 'application/json'
    },
    data
  }
}

export interface RestMessageResponse {
  acceptedAt: string
  messageId: string
}

export interface WhatsAppTemplateMessage {
  to: string
  from: string
  channel: string
  content: {
    contentType: string
    text: string
  }
}
