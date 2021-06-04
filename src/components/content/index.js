import React from 'react';
import './style.css';
import Img01 from '../../assets/image/img01.jpg';
import SimpleCard from '../card';
import CardBottom from '../cardbottom';



const Content = () => {
    return (
        <div className='content'>
            <div className="card-title">DICAS DE COMO</div>
            <strong className='card-strong'>C O N S E R V A R</strong>
            <div className='card-title1'>SEU ORIGINAL MR. CAT</div>

            <div className="card-subtitle">O SEU ORIGINAL MR.CAT É FABRICADO COM COUROS ESPECIALMENTE TRATADOS, POR ISSO PODEM APRESENTAR MARCAS, PEQUENOS ARRANHÕES E DIFERENÇAS DE TONALIDADE, O QUE NÃO SÃO DEFEITOS, MAS CARACTERÍSTICAS NATURAIS DA PELE</div>

            <div className="card-subtitle1">CUIDE BEM DO SEU MR.CAT, VOCÊ PERCEBERÁ QUE QUANTO MAIS O TEMPO PASSA, MAIS PESSOAL E BONITO ELE FICA.</div>
            <img className='imagem-top' src={Img01} alt='imagemtop' />

            <div className='title-midle'>

                <hr className='bar-left'></hr>
                <p className='p'>CONSERVE SEU ORIGINAL MR.CAT</p>
                <hr className='bar-right'></hr>

            </div>

            <div>{SimpleCard()}</div>

            <div className='title-final'>
                <p className='p-boldfinal'>PARA CADA MR. CAT ORIGINAL</p>
                <hr className='bar-leftfinal'></hr>

                <hr className='bar-rightfinal'></hr>
                <p className='p-regularfinal'>UM CUIDADO DIFERENTE</p>


                <div>{CardBottom()}</div>
                <button className='button-all'>
                    VER TODOS OS PRODUTOS
                </button>
            </div>



            <div className='end-news'>SEJA O PRIMEIRO A SABER TODAS AS NOSSAS NOVIDADES!
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="NOME" aria-label="NOME" />
                        <input type="e-mail" className="form-control" placeholder="E-MAIL" aria-label="E-MAIL" />
                       <button  className="form-button">ENVIAR</button> 
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default Content;