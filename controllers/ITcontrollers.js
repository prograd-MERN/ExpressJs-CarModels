const sedanType = (req, res) => {
    res.send('city, Amaze, Aura')
}
const SUV=(req,res)=>{
    res.send('crossover, compactSUV')
}
const Hatchback = (req,res)=>{
    res.send('swift, fiesta, Kwid')
}
const coupe = (req,res)=>{
    res.send('Berlinetta, hardtop, opera')
}
const minivan = (req,res)=>{
    res.send('sienna, odyssey, carnival')
}
const Van = (req,res)=>{
    res.send('Renault Master, Transpoter, Berlingo')
}
module.exports ={
    SUV,
    Hatchback,
    coupe,
    minivan,
    Van,
    sedanType
}