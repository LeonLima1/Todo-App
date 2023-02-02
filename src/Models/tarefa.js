function listar(req, res){
    return res.send('Rota ativada com Get e recurso tarefa:lista de tarefa deve ser retornada')
}

function incluir (req, res){

    res.json(req.body)

    console.log(req.body)

}
export default {listar:listar,incluir:incluir}