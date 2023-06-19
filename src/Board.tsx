import Clock from './Clock'

const Board = () => {
    
    const Clocks= [ 'CET', 'GMT', 'AST']
    return <section className='board-clock'> 
    {Clocks.map((clock: string)=>(
            (<Clock tmz={clock} />)
        ))}
    </section>

    // return <section className='board-clock'> {'hey Yo'}
    // <Clock tmz='CET'/>
    // <Clock tmz='GMT'/>
    // <Clock tmz='AST'/>
    // </section>
}
export default Board


// css not applying