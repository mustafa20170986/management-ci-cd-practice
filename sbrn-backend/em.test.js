import request from 'supertest'
import {jest} from '@jest/globals'
import{sbrn} from './node.js'

describe("testing mini",()=>{
    test('testing normal ci',async()=>{
        const req=await request(sbrn)
        .get("/sbrn-get")

        expect(req.status).toBe(200)
        expect(req.body.message).toBe("message from backend hihi haha serious not :)")
    }),

    test("testing love - sbrn",async()=>{
        const req=await request(sbrn)
        .get("/love-sbrn")

        expect(req.status).toBe(200)
        expect(req.body.message).toBe("i love you so much sbrn 3>")
    })
})

