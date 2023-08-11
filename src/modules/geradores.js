const rand=(min,max)=>Math.floor(Math.random()*(max-min)+min);
const geraMaiscula = () => String.fromCharCode(rand(65,91));
const geraMinuscula= ()=>String.fromCharCode(rand(97,123));
const geraNum= () => String.fromCharCode(rand(48, 58));
const simbolos= '!@#$%&*,.()-+';
const geraSimb= ()=>simbolos[rand(0,simbolos.length)];
export default function gerasenha(qtd, mais,menos,numeros,simb){
    const senhaArray=[];
    qtd= Number(qtd);
    for(let i=0;i<qtd;i++){
        mais && senhaArray.push(geraMaiscula());
        menos && senhaArray.push(geraMinuscula());
        numeros && senhaArray.push(geraNum());
        simb && senhaArray.push(geraSimb());
        //se o primeiro membro de cada linha for verdadeiro, ele passa para o segundo
        //poderia fazer com ifs, apenas estou simplificando(meio gambiarra rs)
    }
const resp=senhaArray.join('').slice(0,qtd);
const senhafin=[];
const senhafinal=resp.split('');
for(let i=0;i<resp.length;i++){
    const lev=(senhafinal[rand(0,senhafinal.length)]);
    senhafin.push(lev);
    senhafinal.splice(senhafinal.indexOf(lev),1); 
}
return senhafin.join('');
};