import './Productos.css'
import Cards from '../../Components/Cards/Cards.jsx'; 


const Productos = () => {
    return (
        <section className='products-section'>
            <Cards url="https://i.postimg.cc/Y210K838/Torta-de-bodas-elegante.jpg" title="Pastel de novios"
            description="Pasteles a pedidos para celebraciones de bodas." price="$250.000"/>
            <Cards url="https://i.postimg.cc/hP0P5jrG/cupcakes-vainilla-decorados-merengue.jpg" title="Cupcakes"
            description="Los más deliciosos cupcakes, muchos sabores y variedades" price="$20.000 por docena"/>
            <Cards url="https://i.postimg.cc/4yBqpr6X/strudel.jpg" title="Strudel de manzana"
            description="Delicioso strudel de manzana, totalmente casero" price="$16.990" />
            <Cards url="https://i.postimg.cc/sDKZby93/pastel-tematico.jpg" title="Pasteles temáticos"
            description="Cumpleaños, celebraciones, bautizos, para toda ocasión, un pastel" price="$39.990" />
            
        </section>
    )
}

export default Productos