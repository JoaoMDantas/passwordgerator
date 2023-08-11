import gerasenha from "./geradores";
const text=document.querySelector('.senha-gerada');
const lengthPassword=document.querySelector('.senha-qtd');
const wordMaior=document.querySelector('.mais');
const word=document.querySelector('.menos');
const number=document.querySelector('.number');
const symbols=document.querySelector('.sym');
const gerador=document.querySelector('.gerator-password');
export default ()=>{
    gerador.addEventListener('click', (e)=>{
       
        text.innerHTML=gera();
    })
}
function gera(){
    const senha=gerasenha(
        lengthPassword.value,
        wordMaior.checked,
        word.checked,
        number.checked,
        symbols.checked
        );
        return senha || 'Nada Selecionado';
        //mesma lógica que usei no &&, se nada estiver selecionado, vair cair na segunda parte do ou
        //chamado de avaliação de curto circuito, é como se fosse um if/else simplificado
}