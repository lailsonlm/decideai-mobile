import { ApolloClient, InMemoryCache } from "@apollo/client";
import { relayStylePagination } from "@apollo/client/utilities";

const accessToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NjA1ODgwNTksImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuaHlncmFwaC5jb20vdjIvY2w2dXVpeGtqMm01YzAxdW0wamRtOHNvZC9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiNmUwYTA2ZDgtNjc3Mi00MmZlLWI4NTgtMWQ5MDZmMzhjYjA3IiwianRpIjoiY2w2djM5NnNzMnk2NDAxdW1jcW9oMjNkNCJ9.yu7xmrUzKg3WBjmZ67Pz1xOUpaTef54NLlClx6d11LkEhgY8cu_q7MpqJLthSabaBOmMq9zIeuWtnMtBxrKOWrW2tiWdPf2bRBVWKD9iVC8YLu4SwbW-mxAUxPJDBLEwnuYQ2TgUM6pJ8CbN1GF_AhmK1MA59JY7TCbN6wgSZpESSwZKnXPTl3DD9DnUuIxIQVJJrA7UxjGV4PRUwMaNasdFbOJy_vAxionSfEbXAHU7fKAouZCyxjznnZyFCZXTfY6TsrYFd8cls3zUH0HolMsOILZJNjAgkbALY7TIYcLRVAgdmGIFjTcXhtgGu7226zrkmuQLmfxdlPUVQ7Rt7xsM4Y9QxpZ_K_3bbHeZRdYsfFe1gfL4t-VlJzJV17sNJkNCwoFfASmB9cNy91mW-vuKTlisIjMuaqCBoT1r4K7d90z0L2fVcn2fzBbE9au6G6M87s3rBol06lUWDV7s421HbGs2xsvIpZEa8G2bv8n1QiRm1iZY4OMr4_tmDHN5DDNl8z176aDeCkqmPfxNRsXmU0ca03UQpqAM2rK2knFclt3bqcIdnjZix_2uEkVq14c2P8I6OxNcfNQvOlKcZof47APqNAgmpYoy_tGjxT8pjSS7vcow12OBGY9ME1PlWd8R6X2kYJ_Qr-LCRwdSpkiygPxUY6Yq_N8uznK_Mrk'


export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cl6uuixkj2m5c01um0jdm8sod/master',
  headers: {
    'Authorization': `Bearer ${accessToken}`
  },
  // cache: new InMemoryCache()
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          companiesConnection: relayStylePagination(["cursor", "where"]),
        },
      },
    },
  })
})