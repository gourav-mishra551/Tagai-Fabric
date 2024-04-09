import React from 'react'
import "./structure.css"
import { Link } from 'react-router-dom'

const Structure = () => {
    return (
        <div className='structure-main'>
        <h1 className='febric-heading'> Infrastructure</h1>
        <div className='structure'>
            <div className="centre">
            <table id="customers">
                <tr>
                    <td>Plot</td>
                    <td>6000 sq ft.</td>

                </tr>
                <tr>
                    <td>Machines</td>
                    <td className='sewing'>
                        <tr>
                            <th>Number of Machine</th>
                            <th>Machine</th>

                        </tr>
                        <tr>
                            <td>110</td>
                            <td>Singer</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Double Needle</td>

                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Feed up</td>

                        </tr>
                        <tr>
                            <td>10</td>
                            <td>4th Thread</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Flat Lock</td>

                        </tr>
                        <tr>
                            <td>11</td>
                            <td>5th Thread</td>

                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Fushing Machine</td>

                        </tr><tr>
                            <td>8</td>
                            <td>Pressing Table</td>

                        </tr><tr>
                            <td>6</td>
                            <td>Cutting Table</td>

                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Set CA2 Buttcn</td>

                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Cutting Machine</td>
                        </tr>

                    </td>

                </tr>
                <tr>
                    <td>Total </td>
                    <td>150 machines</td>
                </tr>
            </table>
            </div>
        </div>
        <div className="women-main">
      <div className="womens">
        <div className="figure">
        <img class="Sirv image-main" src="./TAGAI (1).jpg" />
        </div>
        <div className="lefts">
          <h1 className='febric-heading'>Women's collection </h1>
          <p className="para">There is no other apparel that makes a woman look as poised as the saree.</p>
          <Link to = '/products'>
          <button >View More</button>
          </Link>
        </div>
      </div>
      </div>
        </div>
    )
}

export default Structure