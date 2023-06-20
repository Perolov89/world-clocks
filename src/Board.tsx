import Clock from './Clock'

const Board = () => {
    


    return <section className='board-clock' data-testid="clockContainer"> {'Hey Loga'}
    <Clock tmz='CET'/>
    <Clock tmz='GMT'/>
    <Clock tmz='AST'/>
    </section>
}
export default Board



// =======

    // const Clocks= [ 'CET', 'GMT', 'AST']
    // return <section className='board-clock'> 
    // {Clocks.map((clock: string)=>(
    //         (<Clock tmz={clock} />)
    //     ))}
    // </section>