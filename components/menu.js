import Link from 'next/link'
import Image from 'next/image'
import Busca from   '../imagens/busca.png'


function Menu (){
    return (
        <>
        <div>
        <navbar>
            <Link href='/home'>Receitas rápidas</Link>
            <input 
            type="text"
            id="pesquisa" 
            name="pesquisa" 
            value="Pesquisar receita" />
            <Image src={Busca} width={22} height={22}/>
            </navbar>
        </div>   
        <p>
            <ul>
                <li>A</li>
                <li>B</li>
                <li>C</li>
                <li>D</li>
                <li>E</li>
                <li>A</li>
                <li>A</li>
                <li>A</li>
                <li>A</li>
                <li>A</li>
                <li>A</li>
                <li>A</li>
                <li>A</li>
                <li>A</li>
                <li>A</li>
                <li>A</li>
                <li>A</li>
            </ul>
            <hr></hr>
        </p>
        </>
    )
}

export default Menu