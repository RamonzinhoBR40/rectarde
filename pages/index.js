import Image from 'next/image'
import Link  from 'next/link'
import Foto from '../imagens/imagem1.jpg'

function HOME(){
    return (
        <>
        <div>
            <h1>Seja bem-vindo</h1>
            <h2>Receitas Rápidas</h2>
            <br />
            <p>Site com receitas rápidas e divertidas <br />
            que mata sua fome e blablabla</p>
            <br />
            <br />
            <Link href="https://www.google.com"><button>CLIQUE PARA VER AS RECEITAS</button></Link>
        </div>
        <div>
        <Image src={Foto}></Image>
        </div>
        </>
    )
}

export default HOME