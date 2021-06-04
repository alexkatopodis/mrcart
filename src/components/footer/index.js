import React from 'react';
import './style.css';
import Footer01 from '../../assets/image/footer01.jpg';
import Footer02 from '../../assets/image/footer02.jpg';
import Footer03 from '../../assets/image/footer03.jpg';
import FooterIcon01 from '../../assets/image/footericon01.jpg';
import FooterIcon02 from '../../assets/image/footericon02.jpg';
import FooterIcons from '../../assets/image/footer-icons.jpg';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-line1'>
                <button>BAIXE O APP</button>
                <button>
                    <img src={FooterIcon01} alt='apple' />
                </button>
                <button>
                    <img src={FooterIcon02} alt='android' />
                    <img className='footer-line1icons' src={FooterIcons} alt='icons' />
                </button>

            </div>

            <div className='footer-line2'>
                <button>
                    <img src={Footer01} alt='card' />
                </button>
                <button>
                    <img src={Footer02} alt='change' />
                </button>
                <button>
                    <img src={Footer03} alt='car' />
                </button>
            </div>


            <div className='footer-line3'>
                <button>AJUDA E SUPORTE</button>
                <button>TERMOS E POLÍTICAS</button>
                <button>SOBRE A MR.CAT</button>
                <button>TRABALHE AQUI</button>
                <button>FORMAS DE PAGAMENTO</button>
                <button>SITE SEGURO</button>

            </div>

            <hr className='bar-footer1'></hr>
            <div className='bar-footercategory'>TOP CATEGORIAS</div>
            <hr className='bar-footer2'></hr>

            <div className='footer-finaltext'>ARMAZEM BRASIL COMERCIO DE COUROS E VESTUARIO LTDA | RUA JUMECY RODRIGUES GOMES, 380, BAIRRO: CONDOMINIO INDUSTRIAL, PIRAI - RJ CEP 27175-000 CENPJ: 14818015/0001-76 | ONLINE@MRCAT.COM.BR</div>
            <div className='footer-finaltext1'>ATENÇÃO: ESTA RAZÃO SOCIAL E CNPJ É EXCLUSIVA PARA CANAL ONLINE NÃO TENDO QUALQUER TIPO DE VÍNCULO SOCIETÁRIO OU ECONOMICO COM A REDE DE LOJA PRÓPRIA OU LOJA FRANQUEADA PRESENTE EM TERRITÓRIO NACIONAL</div>

        </div>


    )
}

export default Footer;