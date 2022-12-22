import express from "npm:express";


const app = express();


app.listen(8080, () => console.log("Listening on port 8080"))


app.get("/", (req: any, res: any) => {
    res.send({ status: "succes", message: "Importante ir a http://localhost:8080/meme", })
})

app.get("/meme", (req: any, res: any) => {
    res.redirect("https://qph.cf2.quoracdn.net/main-qimg-8214a26aaf9097d6524575c159aa1bb4-pjlq")
})