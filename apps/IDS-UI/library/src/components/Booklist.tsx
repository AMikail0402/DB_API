import '../styling/booklist.css'

function Bookslist(){
    return(
        <>
        <h1 className="head">Bücherverwaltung</h1><table>
            <thead className="table-head">
                <th>Titel</th>
                <th>Autor</th>
                <th>ISBN</th>
                <th>Bewertung</th>
            </thead>
            <tbody className="table-body">
                <tr>
                    <td>Javascript das Umfassende Handbuch</td>
                    <td>Philipp Ackermann</td>
                    <td>978574839</td>
                    <td>******</td>
                </tr>
                <tr>
                    <td>Designpatterns</td>
                    <td>Erich Gamma</td>
                    <td>9780980909</td>
                    <td>******</td>
                </tr>
            </tbody>
        </table>
        </>
    )
}

export { Bookslist }