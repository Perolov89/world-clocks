import Clock from './clock'
const Board = () => {
    return <section className='board-clock'> {'hey Yo'}
    <Clock tmz='CET'/>
    <Clock tmz='GMT'/>
    <Clock tmz='AST'/>
    </section>
}
export default Board