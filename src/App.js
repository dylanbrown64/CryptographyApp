import { useState } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Cipher from './components/Cipher'
import Dh from './components/Dh'
import ShiftEncrypt from './components/ShiftEncrypt'
import ShiftDecrypt from './components/ShiftDecrypt'
import VigenereEncrypt from './components/VigenereEncrypt'
import VigenereDecrypt from './components/VigenereDecrypt'
import DHGenerate from './components/DHGenerate'
import RSAEncrypt from './components/RSAEncrypt'
import RSADecrypt from './components/RSADecrypt'
import ElGamalEncrypt from './components/ElGamalEncrypt'
import ElGamalDecrypt from './components/ElGamalDecrypt'
import MasseyOmuraEncrypt from './components/MasseyOmuraEncrypt'
import MasseyOmuraDecrypt from './components/MasseyOmuraDecrypt'
import Button from './components/Button'
import Modal from 'react-modal'
import Caesar from './img/Julius_Caesar.jpg'

function App() {
  const [ciphers, setCiphers] = useState([
    {
      id: 1,
      name: 'Shift Cipher',
      desc: 'Shifts each letter in the plaintext',
    },

    {
      id: 2,
      name: 'RSA Encryption',
      desc: 'Public key encryption using large prime numbers',
    },
    {
      id: 3,
      name: 'Vigenere Cipher',
      desc: 'Uses a key word to encrypt text'
    },
    {
      id: 4,
      name: 'Diffie-Hellman Key Exchange',
      desc: 'Public key system for exchanging a secret key'
    },
    {
      id: 5,
      name: 'ElGamal Encryption',
      desc: 'Public key encryption based on Diffie-Hellman'
    },
    {
      id: 6,
      name: 'Massey-Omura Encryption',
      desc: 'Three-pass protocol based on Diffie-Hellman'
    },
  ])

  const [eShiftOpen, setEShiftOpen] = useState(false)
  const [dShiftOpen, setDShiftOpen] = useState(false)

  const [eVigenereOpen, setEVigenereOpen] = useState(false)
  const [dVigenereOpen, setDVigenereOpen] = useState(false)

  const [eDHOpen, setEDHOpen] = useState(false)

  const [eRSAOpen, setERSAOpen] = useState(false)
  const [dRSAOpen, setDRSAOpen] = useState(false)

  const [eEGOpen, setEEGOpen] = useState(false)
  const [dEGOpen, setDEGOpen] = useState(false)

  const [eMOOpen, setEMOOpen] = useState(false)
  const [dMOOpen, setDMOOpen] = useState(false)

  const modalStyle = {

  }

  return (
    <Router>
      <Route
        path='/'
        exact
        render={(props) => (
          <>
          <div className="App">
            <Header />
            <Cipher
              cipher={ciphers[0]}
              onEncrypt={() => setEShiftOpen(true)}
              onDecrypt={() => setDShiftOpen(true)}
              onInfo="/shift"
            />

            <Modal closeTimeoutMS={500} isOpen={eShiftOpen} shouldCloseOnOverlayClick={false} onRequestClose={() => setEShiftOpen(false)} style={modalStyle}>
              <ShiftEncrypt onClose={() => setEShiftOpen(false)}/>
            </Modal>

            <Modal closeTimeoutMS={500} isOpen={dShiftOpen} shouldCloseOnOverlayClick={false} onRequestClose={() => setDShiftOpen(false)} style={modalStyle}>
              <ShiftDecrypt onClose={() => setDShiftOpen(false)}/>
            </Modal>

            <Cipher
              cipher={ciphers[2]}
              onEncrypt={() => setEVigenereOpen(true)}
              onDecrypt={() => setDVigenereOpen(true)}
              onInfo="/vigenere"
            />

            <Modal closeTimeoutMS={500} isOpen={eVigenereOpen} shouldCloseOnOverlayClick={false} onRequestClose={() => setEVigenereOpen(false)} style={modalStyle}>
              <VigenereEncrypt onClose={() => setEVigenereOpen(false)}/>
            </Modal>

            <Modal closeTimeoutMS={500} isOpen={dVigenereOpen} shouldCloseOnOverlayClick={false} onRequestClose={() => setDVigenereOpen(false)} style={modalStyle}>
              <VigenereDecrypt onClose={() => setDVigenereOpen(false)}/>
            </Modal>

            <Dh
              cipher={ciphers[3]}
              onEncrypt={() => setEDHOpen(true)}
              onInfo="/diffiehellman"
            />

            <Modal closeTimeoutMS={500} isOpen={eDHOpen} shouldCloseOnOverlayClick={false} onRequestClose={() => setEDHOpen(false)} style={modalStyle}>
              <DHGenerate onClose={() => setEDHOpen(false)}/>
            </Modal>

            <Cipher
              cipher={ciphers[1]}
              onEncrypt={() => setERSAOpen(true)}
              onDecrypt={() => setDRSAOpen(true)}
              onInfo="/rsa"
            />

            <Modal closeTimeoutMS={500} isOpen={eRSAOpen} shouldCloseOnOverlayClick={false} onRequestClose={() => setERSAOpen(false)} style={modalStyle}>
              <RSAEncrypt onClose={() => setERSAOpen(false)}/>
            </Modal>

            <Modal closeTimeoutMS={500} isOpen={dRSAOpen} shouldCloseOnOverlayClick={false} onRequestClose={() => setDRSAOpen(false)} style={modalStyle}>
              <RSADecrypt onClose={() => setDRSAOpen(false)}/>
            </Modal>

            <Cipher
              cipher={ciphers[4]}
              onEncrypt={() => setEEGOpen(true)}
              onDecrypt={() => setDEGOpen(true)}
              onInfo="/elgamal"
            />

            <Modal closeTimeoutMS={500} isOpen={eEGOpen} shouldCloseOnOverlayClick={false} onRequestClose={() => setEEGOpen(false)} style={modalStyle}>
              <ElGamalEncrypt onClose={() => setEEGOpen(false)}/>
            </Modal>

            <Modal closeTimeoutMS={500} isOpen={dEGOpen} shouldCloseOnOverlayClick={false} onRequestClose={() => setDEGOpen(false)} style={modalStyle}>
              <ElGamalDecrypt onClose={() => setDEGOpen(false)}/>
            </Modal>

            <Cipher
              cipher={ciphers[5]}
              onEncrypt={() => setEMOOpen(true)}
              onDecrypt={() => setDMOOpen(true)}
              onInfo="/masseyomura"
            />

            <Modal closeTimeoutMS={500} isOpen={eMOOpen} shouldCloseOnOverlayClick={false} onRequestClose={() => setEMOOpen(false)} style={modalStyle}>
              <MasseyOmuraEncrypt onClose={() => setEMOOpen(false)}/>
            </Modal>

            <Modal closeTimeoutMS={500} isOpen={dMOOpen} shouldCloseOnOverlayClick={false} onRequestClose={() => setDMOOpen(false)} style={modalStyle}>
              <MasseyOmuraDecrypt onClose={() => setDMOOpen(false)}/>
            </Modal>

          </div>
          </>
        )}
      />

      <Route
        path='/shift'
        render={(props) => (
          <>
          <Header title="Shift Cipher" />
            <div className="info">
            <h2 className="title">How To Use</h2>
            <p>
              The shift cipher takes each letter in the plaintext and changes it
              to the letter that is a set number of spaces down the alphabet. This
              shift is done in the forward direction and once the shift goes passed Z, it
              goes back around to A.
            </p>
            <h3>Parameters:</h3>
            <div className="list">
            <ul>
              <li>Plaintext - Text with only letters and no special characters</li>
              <li>Key - An integer between 0 and 26</li>
            </ul>
            </div>
            <h2 className="title">Math</h2>
            <p>
              The mathematical functions for encrypting and decrypting functions
              are defined using addition modulo 26. We map the letters in the
              alphabet to integers starting with A = 0, B = 1, and so on.
            </p>
            <div className="infotable">
            <table>
              <tr>
                <td>A</td><td>B</td><td>C</td><td>D</td><td>E</td><td>F</td>
                <td>G</td><td>H</td><td>I</td><td>J</td><td>K</td><td>L</td>
                <td>M</td><td>N</td><td>O</td><td>P</td><td>Q</td><td>R</td>
                <td>S</td><td>T</td><td>U</td><td>V</td><td>W</td><td>X</td>
                <td>Y</td><td>Z</td>
              </tr>
              <tr>
                <td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td>
                <td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td>
                <td>12</td><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td>
                <td>18</td><td>19</td><td>20</td><td>21</td><td>22</td><td>23</td>
                <td>24</td><td>25</td>
              </tr>
            </table>
            </div>
            <p>
              Then the encryption and decryption functions for each letter, given by x, with a key, given by n, are:
            </p>
            <p style={{display: 'block', fontWeight:'bold'}}>E(x,n) = x+n (mod 26)</p>
            <p style={{display: 'block', fontWeight:'bold'}}>D(x,n) = x-n (mod 26)</p>
            <p>
              For example, let the key be n = 3. Then the shifted alphabet can be seen through this table:
            </p>
            <div className="infotable">
            <table>
              <tr>
                <th>Plaintext</th>
                <td>A</td><td>B</td><td>C</td><td>D</td><td>E</td><td>F</td>
                <td>G</td><td>H</td><td>I</td><td>J</td><td>K</td><td>L</td>
                <td>M</td><td>N</td><td>O</td><td>P</td><td>Q</td><td>R</td>
                <td>S</td><td>T</td><td>U</td><td>V</td><td>W</td><td>X</td>
                <td>Y</td><td>Z</td>
              </tr>
              <tr>
                <th>Ciphertext</th>
                <td>D</td><td>E</td><td>F</td><td>G</td><td>H</td><td>I</td>
                <td>J</td><td>K</td><td>L</td><td>M</td><td>N</td><td>O</td>
                <td>P</td><td>Q</td><td>R</td><td>S</td><td>T</td><td>U</td>
                <td>V</td><td>W</td><td>X</td><td>Y</td><td>Z</td><td>A</td>
                <td>B</td><td>C</td>
              </tr>
            </table>
            </div>
            <h2 className="title">History</h2>
            <p>
              The shift cipher is also known as the Caesar cipher. This is because
              Roman emperor Julius Caesar used the cipher, specifically with the key
              n = 3, to send secret military messages. This makes the shift cipher
              one of the oldest ciphers known as well as one of the most famous.
            </p>
            <img src={Caesar} style={{width:'15%', height:'auto', marginLeft: 'auto', marginRight: 'auto'}}/>
            <br/>
            <Link to="/">
              <Button style={btnStyle} text="Home" />
            </Link>
          </div>
          </>
        )}
      />

      <Route
        path='/vigenere'
        render={(props) => (
          <>
          <div className="info">
            <Header title="Vigenere Cipher" />
            <h2 className="title">How To Use</h2>
            <p>
              Essentially, the Vigenere Cipher is a combination of 26 shift ciphers.
              Rather than using an integer key to decide how many times the alphabet
              shifts, it uses a key word. The letters in the key word are mapped
              to each letter in the plain text. The plaintext letter is then shifted,
              where the key is the corresponding letter in the plain text mapped
              to an integer.
            </p>
            <h3>Parameters:</h3>
            <div className="list">
            <ul>
              <li>Plaintext - Text with only letters. Plaintext must be one word and contain no special characters.</li>
              <li>Key Word - One word text with only lowercase letters and no special characters.</li>
            </ul>
            </div>
            <h2 className="title">Math</h2>
            <p>
              Just as we did for the shift cipher, the Vigenere cipher requires
              each letter to be mapped to an integer starting with A = 0 and ending
              with Z = 25.
            </p>
            <table>
              <tr>
                <td>A</td><td>B</td><td>C</td><td>D</td><td>E</td><td>F</td>
                <td>G</td><td>H</td><td>I</td><td>J</td><td>K</td><td>L</td>
                <td>M</td><td>N</td><td>O</td><td>P</td><td>Q</td><td>R</td>
                <td>S</td><td>T</td><td>U</td><td>V</td><td>W</td><td>X</td>
                <td>Y</td><td>Z</td>
              </tr>
              <tr>
                <td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td>
                <td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td>
                <td>12</td><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td>
                <td>18</td><td>19</td><td>20</td><td>21</td><td>22</td><td>23</td>
                <td>24</td><td>25</td>
              </tr>
            </table>
            <p>
              To map the key word to the plaintext, we start by mapping the first
              letter of each together, and continue until every letter of the key
              word is maped to the plaintext. At this point, if the plaintext is
              longer than the key word, the keyword is repeated and the rest of
              the process repeats until all letters in the plaintext are mapped.
            </p>
            <p>
              For example, let the plaintext be "HELLOWORLD" and the key word be
              "yes". Then the letters are mapped as follows.
            </p>
            <table>
              <tr>
                <td>H</td><td>E</td><td>L</td><td>L</td><td>O</td><td>W</td>
                <td>O</td><td>R</td><td>L</td><td>D</td>
              </tr>
              <tr>
                <td>y</td><td>e</td><td>s</td><td>y</td><td>e</td><td>s</td>
                <td>y</td><td>e</td><td>s</td><td>y</td>
              </tr>
            </table>
            <p>
              Thus H is mapped to y, E is mapped to e, and so on.
            </p>
            <p>
              Now that the plaintext is mapped to the key, we can encrypt. Assume
              that PT<sub>i</sub> is the i<sup>th</sup> letter in the plaintext
              and K<sub>i</sub> is the i<sup>th</sup> letter in the expanded key.
              Then the encryption and decryption functions for each letter are:
            </p>
            <p style={{display: 'block', fontWeight:'bold'}}>E(PT<sub>i</sub>, K<sub>i</sub>) = PT<sub>i</sub> + K<sub>i</sub> (mod 26)</p>
            <p style={{display: 'block', fontWeight:'bold'}}>D(PT<sub>i</sub>, K<sub>i</sub>) = PT<sub>i</sub> - K<sub>i</sub> (mod 26)</p>
            <p>
              Thus to continue our example, we will encrypt the first letter of
              our plaintext, H. H maps to 7 and y maps to 24, so the encryption is
              7 + 24 (mod 26), which is 5. Therefore the first letter in our ciphertext
              is F. To decrypt, we use 5 - 24 (mod 26), which is 7, the first letter
              in the plaintext.
            </p>
            <p>
              A visual way of encrypting using this cipher is to use the table below.
              This is done by finding the row with the plaintext letter and matching
              it with the column of the corresponding key letter.
            </p>
            <table>
              <tr>
                <th> </th>
                <th>A</th><th>B</th><th>C</th><th>D</th><th>E</th><th>F</th><th>G</th><th>H</th><th>I</th><th>J</th><th>K</th><th>L</th><th>M</th><th>N</th><th>O</th><th>P</th><th>Q</th><th>R</th><th>S</th><th>T</th><th>U</th><th>V</th><th>W</th><th>X</th><th>Y</th><th>Z</th>
              </tr>
              <tr>
                <th>A</th>
                <td>A</td><td>B</td><td>C</td><td>D</td><td>E</td><td>F</td><td>G</td><td>H</td><td>I</td><td>J</td><td>K</td><td>L</td><td>M</td><td>N</td><td>O</td><td>P</td><td>Q</td><td>R</td><td>S</td><td>T</td><td>U</td><td>V</td><td>W</td><td>X</td><td>Y</td><td>Z</td>
              </tr>
              <tr>
                <th>B</th>
                <td>B</td><td>C</td><td>D</td><td>E</td><td>F</td><td>G</td><td>H</td><td>I</td><td>J</td><td>K</td><td>L</td><td>M</td><td>N</td><td>O</td><td>P</td><td>Q</td><td>R</td><td>S</td><td>T</td><td>U</td><td>V</td><td>W</td><td>X</td><td>Y</td><td>Z</td><td>A</td>
              </tr>
              <tr>
                <th>C</th>
                <td>C</td><td>D</td><td>E</td><td>F</td><td>G</td><td>H</td><td>I</td><td>J</td><td>K</td><td>L</td><td>M</td><td>N</td><td>O</td><td>P</td><td>Q</td><td>R</td><td>S</td><td>T</td><td>U</td><td>V</td><td>W</td><td>X</td><td>Y</td><td>Z</td><td>A</td><td>B</td>
              </tr>
              <tr>
                <th>D</th>
                <td>D</td><td>E</td><td>F</td><td>G</td><td>H</td><td>I</td><td>J</td><td>K</td><td>L</td><td>M</td><td>N</td><td>O</td><td>P</td><td>Q</td><td>R</td><td>S</td><td>T</td><td>U</td><td>V</td><td>W</td><td>X</td><td>Y</td><td>Z</td><td>A</td><td>B</td><td>C</td>
              </tr>
              <tr>
                <th>E</th>
                <td>E</td><td>F</td><td>G</td><td>H</td><td>I</td><td>J</td><td>K</td><td>L</td><td>M</td><td>N</td><td>O</td><td>P</td><td>Q</td><td>R</td><td>S</td><td>T</td><td>U</td><td>V</td><td>W</td><td>X</td><td>Y</td><td>Z</td><td>A</td><td>B</td><td>C</td><td>D</td>
              </tr>
              <tr>
                <th>F</th>
                <td>F</td><td>G</td><td>H</td><td>I</td><td>J</td><td>K</td><td>L</td><td>M</td><td>N</td><td>O</td><td>P</td><td>Q</td><td>R</td><td>S</td><td>T</td><td>U</td><td>V</td><td>W</td><td>X</td><td>Y</td><td>Z</td><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td>
              </tr>
              <tr>
                <th>G</th>
                <td>G</td><td>H</td><td>I</td><td>J</td><td>K</td><td>L</td><td>M</td><td>N</td><td>O</td><td>P</td><td>Q</td><td>R</td><td>S</td><td>T</td><td>U</td><td>V</td><td>W</td><td>X</td><td>Y</td><td>Z</td><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td><td>F</td>
              </tr>
              <tr>
                <th>H</th>
                <td>H</td><td>I</td><td>J</td><td>K</td><td>L</td><td>M</td><td>N</td><td>O</td><td>P</td><td>Q</td><td>R</td><td>S</td><td>T</td><td>U</td><td>V</td><td>W</td><td>X</td><td>Y</td><td>Z</td><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td><td>F</td><td>G</td>
              </tr>
              <tr>
                <th>I</th>
                <td>I</td><td>J</td><td>K</td><td>L</td><td>M</td><td>N</td><td>O</td><td>P</td><td>Q</td><td>R</td><td>S</td><td>T</td><td>U</td><td>V</td><td>W</td><td>X</td><td>Y</td><td>Z</td><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td><td>F</td><td>G</td><td>H</td>
              </tr>
              <tr>
                <th>J</th>
                <td>J</td><td>K</td><td>L</td><td>M</td><td>N</td><td>O</td><td>P</td><td>Q</td><td>R</td><td>S</td><td>T</td><td>U</td><td>V</td><td>W</td><td>X</td><td>Y</td><td>Z</td><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td><td>F</td><td>G</td><td>H</td><td>I</td>
              </tr>
              <tr>
                <th>K</th>
                <td>K</td><td>L</td><td>M</td><td>N</td><td>O</td><td>P</td><td>Q</td><td>R</td><td>S</td><td>T</td><td>U</td><td>V</td><td>W</td><td>X</td><td>Y</td><td>Z</td><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td><td>F</td><td>G</td><td>H</td><td>I</td><td>J</td>
              </tr>
              <tr>
                <th>L</th>
                <td>L</td><td>M</td><td>N</td><td>O</td><td>P</td><td>Q</td><td>R</td><td>S</td><td>T</td><td>U</td><td>V</td><td>W</td><td>X</td><td>Y</td><td>Z</td><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td><td>F</td><td>G</td><td>H</td><td>I</td><td>J</td><td>K</td>
              </tr>
              <tr>
                <th>M</th>
                <td>M</td><td>N</td><td>O</td><td>P</td><td>Q</td><td>R</td><td>S</td><td>T</td><td>U</td><td>V</td><td>W</td><td>X</td><td>Y</td><td>Z</td><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td><td>F</td><td>G</td><td>H</td><td>I</td><td>J</td><td>K</td><td>L</td>
              </tr>
              <tr>
                <th>N</th>
                <td>N</td><td>O</td><td>P</td><td>Q</td><td>R</td><td>S</td><td>T</td><td>U</td><td>V</td><td>W</td><td>X</td><td>Y</td><td>Z</td><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td><td>F</td><td>G</td><td>H</td><td>I</td><td>J</td><td>K</td><td>L</td><td>M</td>
              </tr>
              <tr>
                <th>O</th>
                <td>O</td><td>P</td><td>Q</td><td>R</td><td>S</td><td>T</td><td>U</td><td>V</td><td>W</td><td>X</td><td>Y</td><td>Z</td><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td><td>F</td><td>G</td><td>H</td><td>I</td><td>J</td><td>K</td><td>L</td><td>M</td><td>N</td>
              </tr>
              <tr>
                <th>P</th>
                <td>P</td><td>Q</td><td>R</td><td>S</td><td>T</td><td>U</td><td>V</td><td>W</td><td>X</td><td>Y</td><td>Z</td><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td><td>F</td><td>G</td><td>H</td><td>I</td><td>J</td><td>K</td><td>L</td><td>M</td><td>N</td><td>O</td>
              </tr>
              <tr>
                <th>Q</th>
                <td>Q</td><td>R</td><td>S</td><td>T</td><td>U</td><td>V</td><td>W</td><td>X</td><td>Y</td><td>Z</td><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td><td>F</td><td>G</td><td>H</td><td>I</td><td>J</td><td>K</td><td>L</td><td>M</td><td>N</td><td>O</td><td>P</td>
              </tr>
              <tr>
                <th>R</th>
                <td>R</td><td>S</td><td>T</td><td>U</td><td>V</td><td>W</td><td>X</td><td>Y</td><td>Z</td><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td><td>F</td><td>G</td><td>H</td><td>I</td><td>J</td><td>K</td><td>L</td><td>M</td><td>N</td><td>O</td><td>P</td><td>Q</td>
              </tr>
              <tr>
                <th>S</th>
                <td>S</td><td>T</td><td>U</td><td>V</td><td>W</td><td>X</td><td>Y</td><td>Z</td><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td><td>F</td><td>G</td><td>H</td><td>I</td><td>J</td><td>K</td><td>L</td><td>M</td><td>N</td><td>O</td><td>P</td><td>Q</td><td>R</td>
              </tr>
              <tr>
                <th>T</th>
                <td>T</td><td>U</td><td>V</td><td>W</td><td>X</td><td>Y</td><td>Z</td><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td><td>F</td><td>G</td><td>H</td><td>I</td><td>J</td><td>K</td><td>L</td><td>M</td><td>N</td><td>O</td><td>P</td><td>Q</td><td>R</td><td>S</td>
              </tr>
              <tr>
                <th>U</th>
                <td>U</td><td>V</td><td>W</td><td>X</td><td>Y</td><td>Z</td><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td><td>F</td><td>G</td><td>H</td><td>I</td><td>J</td><td>K</td><td>L</td><td>M</td><td>N</td><td>O</td><td>P</td><td>Q</td><td>R</td><td>S</td><td>T</td>
              </tr>
              <tr>
                <th>V</th>
                <td>V</td><td>W</td><td>X</td><td>Y</td><td>Z</td><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td><td>F</td><td>G</td><td>H</td><td>I</td><td>J</td><td>K</td><td>L</td><td>M</td><td>N</td><td>O</td><td>P</td><td>Q</td><td>R</td><td>S</td><td>T</td><td>U</td>
              </tr>
              <tr>
                <th>W</th>
                <td>W</td><td>X</td><td>Y</td><td>Z</td><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td><td>F</td><td>G</td><td>H</td><td>I</td><td>J</td><td>K</td><td>L</td><td>M</td><td>N</td><td>O</td><td>P</td><td>Q</td><td>R</td><td>S</td><td>T</td><td>U</td><td>V</td>
              </tr>
              <tr>
                <th>X</th>
                <td>X</td><td>Y</td><td>Z</td><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td><td>F</td><td>G</td><td>H</td><td>I</td><td>J</td><td>K</td><td>L</td><td>M</td><td>N</td><td>O</td><td>P</td><td>Q</td><td>R</td><td>S</td><td>T</td><td>U</td><td>V</td><td>W</td>
              </tr>
              <tr>
                <th>Y</th>
                <td>Y</td><td>Z</td><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td><td>F</td><td>G</td><td>H</td><td>I</td><td>J</td><td>K</td><td>L</td><td>M</td><td>N</td><td>O</td><td>P</td><td>Q</td><td>R</td><td>S</td><td>T</td><td>U</td><td>V</td><td>W</td><td>X</td>
              </tr>
              <tr>
                <th>Z</th>
                <td>Z</td><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td><td>F</td><td>G</td><td>H</td><td>I</td><td>J</td><td>K</td><td>L</td><td>M</td><td>N</td><td>O</td><td>P</td><td>Q</td><td>R</td><td>S</td><td>T</td><td>U</td><td>V</td><td>W</td><td>X</td><td>Y</td>
              </tr>
            </table>
            <h2 className="title">History</h2>
            <p>
              Throughout the 15<sup>th</sup> and 16<sup>th</sup> centuries, cryptologists
              worked to develop polyalphabetic ciphers, which is a cipher where one
              letter is not mapped one to one with another, but rather one letter
              in the plaintext can map to multiple letters in the ciphertext. Some
              elementary versions of this concept were made during this time,
              including one by Blaise de Vigenere in 1586. However, the Vigenere cipher
              we decribe here was actually discovered by Giovan Battista Bellaso
              in 1553. Centuries later, the cipher was wrongfully attributed to Vigenere
              and the name stuck.
            </p>
            <p>
              From its inception to around the mid 19<sup>th</sup> century, the
              Vigenere cipher was thought to be unbreakable. It wasn't until around this
              time that a general method for breaking it was designed. Especially
              today with our current technology, the cipher is much less secure than
              it was once thought to be, but is still important for the history
              of cryptography because of how strong it was.
            </p>
            <p>
              A notable example of the Vigenere cipher being used was in the American
              Civil War, where the Confederate army used it to securely communicate.
              They famously rotated between key phrases such as "Manchester Bluff" and
              "Complete Victory".
            </p>
            <Link to="/">
              <Button style={btnStyle} text="Home" />
            </Link>
          </div>
          </>
        )}
      />

      <Route
        path='/diffiehellman'
        render={(props) => (
          <>
          <div className="info">
            <Header title="Diffie Hellman Key Exchange" />
            <h2 className="title">How To Use</h2>
            <p>
              While the other encryption methods listed are meant for encrypting and decrypting messges,
              the Diffie-Hellman key exchange is a protocol for securely exchanging a private key.
              The problem with symmetric encryption methods such as the shift cipher
              and the Vigenere cipher is that a key must be established before messages
              can be sent. This means that the secret key can be discovered by a third party
              and a meeting between groups sending messages must be made. The Diffie-Hellman
              key exchange allows for this key to be established securely between two parties
              without meeting.
            </p>
            <p>
              Diffie-Hellman is a public key protocol, meaning the parameters used
              to find the key are published and open to anyone wanting to establish
              a secret key. This app allows the user to play the role of both parties
              in this exchange to illustrate how the method works.
            </p>
            <h3>Parameters:</h3>
            <div className="list">
            <ul>
              <li>Prime Number - Published publicly and usually very large</li>
              <li>Generator Base - Integer that is a generator, or primitive root, for the prime</li>
              <li>Person A's Secret Key - Integer that is kept secret by Person A in the exchange</li>
              <li>Person B's Secret Key - Integer that is kept secret by Person B in the exchange</li>
            </ul>
            </div>
            <p>
              A generator g, or primitive root, mod p for a prime number p is a number such that
              for any integer a from 1 to p-1, there is an integer k such that g<sup>k</sup> &#8801; a (mod p).
            </p>
            <h2 className="title">Math</h2>
            <p>
              Like most of the public key methods on the app, Diffie-Hellman uses a large prime number
              as part of the public key. In practice, this number should be very large for secerity reasons,
              but for the purposes of the app it can be any size.
            </p>
            <p>
              While the method works even if the base used isn't a generator, the
              security of the method relies on it. When a number is raised to a
              power mod p, the amount of possible results may be very small. By definition,
              raising a generator to a power mod p has the p-1 possible results, which
              is the most possible.
            </p>
            <p>Using the example of two people, Alice and Bob, the protocol works as follows:</p>
            <div className="numbers">
            <ol>
              <li>Alice and Bob agree on a prime, <i>p</i>, and a generator, <i>g</i>.</li>
              <li>Alice chooses a secret integer, <i>a</i>. She computes <b>A = g<sup>a</sup> (mod p)</b> and sends A to Bob.</li>
              <li>Bob chooses a secret integer, <i>b</i>. He computes <b>B = g<sup>b</sup> (mod p)</b> and sends B to Alice.</li>
              <li>Alice receives B and computes <b>s<sub>a</sub> = B<sup>a</sup> (mod p)</b>.</li>
              <li>Bob receives A and computes <b>s<sub>b</sub> = A<sup>b</sup> (mod p)</b>.</li>
              <li>Alice and Bob now have <i>s<sub>a</sub></i> and <i>s<sub>b</sub></i>, which are equal. This is the shared key.</li>
            </ol>
            </div>
            <p>
              This method works because Alice ends up with <b>(g<sup>b</sup>)<sup>a</sup> (mod p)</b>
              while Bob has <b>(g<sup>a</sup>)<sup>b</sup> (mod p)</b>. Then Alice's number is equal to <b>g<sup>ba</sup> (mod p)</b> and
              Bob's is <b>g<sup>ab</sup> (mod p)</b>. <b>g<sup>ba</sup> &#8801; g<sup>ab</sup> (mod p)</b>, so
              Alice and Bob have the same key.
            </p>
            <p>
              The only secret parameters in this exchange are Alice's secret integer <i>a</i> and
              Bob's secret integer <i>b</i>. Any potential eavesdropper only knows <b>g<sup>a</sup> (mod p)</b>, <b>g<sup>b</sup> (mod p)</b>, and the
              public parameters <i>p</i> and <i>g</i>. The security comes from how with
              this information, it is extremely hard to find the secret key <b>g<sup>ba</sup> &#8801; g<sup>ab</sup> (mod p)</b>.
              This is because the eavesdropper would need to find <i>a</i> and <i>b</i> by calculating
              the logarithm of <b>g<sup>a</sup> (mod p)</b> and <b>g<sup>b</sup> (mod p)</b>, which for
              a large prime <i>p</i> takes a very long time with any known algoritm.
              Therefore even a modern computer is insufficient to find these values given
              a large enough prime.
            </p>
            <h2 className="title">History</h2>
            <p>
              In the mid 1970s, mathematician Ralph Merkle developed the idea of public
              key cryptography. This provided a solution for the limitations of symmetric
              ciphers that required both parties to agree on and remember a secret key.
              This method only required one public key that could be published broadly
              while still allowing for secure communication. the Diffie-Hellman key
              exchange was one of the first systems to utilize this idea.
            </p>
            <p>
              The Diffie-Hellman key exchange was designed by Whitfield Diffie and
              Martin Hellman. It was published in 1976 and influenced by Merkle's
              work. It was one of the first widely recognized public key cryptography
              protocols and influenced many more to come after it.
            </p>
            <Link to="/">
              <Button style={btnStyle} text="Home" />
            </Link>
          </div>
          </>
        )}
      />

      <Route
        path='/rsa'
        render={(props) => (
          <>
          <div className="info">
            <Header title="RSA Encryption" />
            <h2 className="title">How To Use</h2>
            <p>
              RSA is a public key protocol. To encrypt, all that is needed is the
              two part public key and a plaintext message.
            </p>
            <p>
              To maintain simplicity, this app will encode the text to an integer by
              assigning each character to its ASCII value. This results in a sequence of
              integers mod 128 separated by spaces, which will be encrypted one at a time to return the encrypted
              version of that sequence. The decryption function takes in the sequence in that
              format and decrypts it. This is done because RSA requires substantially large
              key numbers to work for even short messages when they are encoded into a single integer.
              Therefore with this method, the only requirement for the integer is that it's larger than the 128,
              making the app much easier to use.
            </p>
            <h3>Encryption Parameters:</h3>
            <div className="list">
            <ul>
              <li>Plaintext - Text consisting of ASCII characters</li>
              <li>Base Integer - Published publicly and usually very large</li>
              <li>Encryption Integer - Published as part of the public key</li>
            </ul>
            </div>
            <h3>Decryption Parameters:</h3>
            <div className="list">
            <ul>
              <li>Ciphertext - A sequence of numbers mod 128 separated by spaces.</li>
              <li>Two Prime Numbers - Two large primes that when multiplied result in the base number for the public key.</li>
              <li>Decryption Integer - Private integer that is the inverse of the published Encryption Integer</li>
            </ul>
            </div>
            <h2 className="title">Math</h2>
            <p>
              Using the example of Alice wanting to send a message to Bob, we will go through the full
              process of RSA. First, Bob must establish his public key and secret decryption integer as below:
            </p>
            <div className="numbers">
            <ol>
              <li>Bob chooses two prime numbers <i>p</i> and <i>q</i>, which are kept secret.</li>
              <li>Bob calculates <b>N = pq</b> and publishes it as the Base Integer in his public key.</li>
              <li>Bob calculates the least common multiple of <b>p - 1</b> and <b>q - 1</b>: <b>L = lcm(p - 1, q - 1)</b>.</li>
              <li>Bob chooses the encryption number <i>e</i> such that <b>1 &#60; e &#60; L</b> and <b>gcd(e, L) = 1</b>. <i>e</i> is published as part of the public key.</li>
              <li>Bob calculates the decryption number <i>d</i> by finding <b>e<sup>-1</sup> (mod L)</b>. In other words, <i>d</i> is the inverse of <i>e</i> mod L.</li>
            </ol>
            </div>
            <p>
              Bob has now published his public key pair <b>(N, e)</b> and has his private numbers <i>p</i>, <i>q</i>, <i>L</i>, and <i>d</i>.
              Alice can now use the public key to encrypt her message and send it to Bob:
            </p>
            <div className="numbers">
            <ol>
              <li>Alice takes her message encoded as an integer <i>m</i> and calculates <b>c = m<sup>e</sup> (mod N)</b>. She sends this to Bob.</li>
              <li>Bob receives <i>c</i> and decrypts it by calculating <b>c<sup>d</sup> (mod N)</b>, which is the decrypted message.</li>
            </ol>
            </div>
            <p>
              The fact that this method works can be proven using Fermat's Little Theorem,
              an important theorem in number theory. This states that <b>a<sup>p - 1</sup> &#8801; a (mod p)</b> where
              p is prime.
            </p>
            <p>
              We want to show that <b>c<sup>d</sup> &#8801; m<sup>de</sup> &#8801; m (mod N)</b>. To prove
              this, we can show that <b>m<sup>de</sup> &#8801; m (mod p)</b> and <b>m<sup>de</sup> &#8801; m (mod q)</b>.
              This is because <b>N = pq</b>. Since <i>d</i> and <i>e</i> are
              inverses mod L, <b>de &#8801; 1 (mod L)</b>. Then using the rules of modular arithmetic
              and the fact that <b>L = lcm(p - 1, q - 1)</b>, it follows that <b>de - 1</b> is a
              multiple of L, which in turn is a multiple of both <b>p - 1</b> and <b>q - 1</b>.
              Thus <b>de - 1 = s(p-1) = t(q - 1)</b> for some integers <i>s</i> and <i>t</i>.
              Now we use some algebra as well as Fermat's Little Theorem to see
              that <b>m<sup>de</sup> &#8801; m<sup>de - 1</sup>m &#8801; m<sup>(p-1)s</sup>m &#8801; 1<sup>s</sup>m &#8801; m (mod p)</b>.
              Similarly, <b>m<sup>de</sup> &#8801; m<sup>de - 1</sup>m &#8801; m<sup>(q-1)t</sup>m &#8801; 1<sup>t</sup>m &#8801; m (mod t)</b>.
              Thus we have proven our theorem that <b>m<sup>de</sup> &#8801; m (mod N)</b> and therefore shown that the method works.
            </p>
            <p>
              RSA is secure for large values of <i>N</i> because it is extremely difficult to factor
              large numbers, especially when those factors are two large primes. It is simple to
              multiply these primes together, but factoring can be nearly impossible with modern computers.
              Therefore it would be difficult for a factor to find the secret integers <i>p</i> and <i>q</i> without
              already knowing them. Without these numbers, <i>L</i> can't be found and therefore
              the decryption integer <i>d</i> cannot be found. Therefore the method is secure
              when using extremely large primes.
            </p>
            <h2 className="title">History</h2>
            <p>
              Shortly after the Diffie-Hellman key exchange was published, RSA was
              publicly described. This makes it one of the oldest public key systems
              as well as the most widely used. RSA gets its name from the initials of
              its three developers: Ron Rivest, Adi Shamir, and Leonard Adleman.
            </p>
            <p>
              While RSA is among the most well-used and well-implemented cryptosystems,
              the development of quantum computers puts its security at risk. These
              computers may be able to factor numbers at much faster rates, making it
              much easier to finf <i>p</i> and <i>q</i>. Therefore there is currently a
              push to find a replacement for RSA that is resistant to quantum computing.
            </p>
            <Link to="/">
              <Button style={btnStyle} text="Home" />
            </Link>
          </div>
          </>
        )}
      />

      <Route
        path='/elgamal'
        render={(props) => (
          <>
          <div className="info">
            <Header title="ElGamal Encryption" />
            <h2 className="title">How To Use</h2>
            <p>
              ElGamal is a cryptosystem based on the Diffie-Hellman key exchange.
              It essentially adapts that system to allow it to send messages rather
              than just exchange keys. For this reason, the parameters and explanation
              of how it works will rely on information from the Diffie-Hellman page.
              It uses a three part public key for encryption.
            </p>
            <p>
              This app uses the same encdoing system described in the RSA info page
              for ElGamal.
            </p>
            <h3>Encryption Parameters:</h3>
            <div className="list">
            <ul>
              <li>Plaintext - Text consisting of ASCII characters</li>
              <li>Prime Integer - Published publicly and usually very large</li>
              <li>Generator - Publicly published integer that is a generator, or primitive root, for the prime</li>
              <li>Base Integer - Publicly published integer</li>
              <li>Encryption Integer - The message sender's private integer key</li>
            </ul>
            </div>
            <h3>Decryption Parameters:</h3>
            <div className="list">
            <ul>
              <li>X - The main ciphertext sent by the sender. Consists of a sequence of numbers mod 128 separated by spaces.</li>
              <li>A - Integer sent by the message sender.</li>
              <li>Prime Integer - The prime number from the public key.</li>
              <li>Decryption Integer - The message recipient's secret decryption integer.</li>
            </ul>
            </div>
            <h2 className="title">Math</h2>
            <p>
              Using the example of Alice wanting to send a message to Bob, we will go through the full
              process of ElGamal. First, Bob must establish his public key and secret decryption integer as below:
            </p>
            <div className="numbers">
            <ol>
              <li>Bob chooses a prime number <i>p</i> and a generator <i>g</i> mod <i>p</i>.</li>
              <li>Bob chooses his secret integer <i>b</i>.</li>
              <li>Bob calculates <b>B = g<sup>b</sup> (mod p)</b></li>
            </ol>
            </div>
            <p>
              Bob now has his public key: <b>(p, g, B)</b>. He also has his private integer <i>b</i>. Alice can now encrypt a message to send to Bob:
            </p>
            <div className="numbers">
            <ol>
              <li>Alice encodes her message as an integer <i>m</i>.</li>
              <li>Alice chooses her secret encryption integer <i>a</i>.</li>
              <li>Alice calculates <b>A = g<sup>a</sup> (mod p)</b>.</li>
              <li>Alice calculates <b>s<sub>a</sub> = B<sup>a</sup> (mod p)</b>.</li>
              <li>Alice calculates <b>X = m*s<sub>a</sub> (mod p)</b>.</li>
              <li>Alice sends the pair <b>(X, A)</b> to Bob.</li>
              <li>Bob calculates <b>s<sub>b</sub> = A<sup>b</sup> (mod p)</b>.</li>
              <li>Bob calculates <i>s</i>, the inverse of s<sub>b</sub>.</li>
              <li>Bob decrypts the message by calculating <b>X*s (mod p)</b>.</li>
            </ol>
            </div>
            <p>
              Through that process, Alice and Bob exchange secret keys using the exact
              same process as Diffie-Hellman. The integers <i>s<sub>a</sub></i> and <i>s<sub>b</sub></i> are
              equivalent since it involves finding the integers <i>A</i> and <i>B</i> and exchanging
              them the same way regular Diffie-Hellman is performed. Therefore the main
              change is the addition of plaintext, which is encrypted my multiplying the message
              by the shared key mod <i>p</i>. Then when Bob finds the inverse of <i>s<sub>b</sub></i>, <i>s</i>, the
              result is <b>X*s &#8801; m*s<sub>a</sub>*s &#8801; m*s<sub>b</sub>*s &#8801; m (mod p)</b>.
            </p>
            <p>
              Since the same parameters are passed as in Diffie-Hellman, the key exchange
              aspect is secure. Therefore an eavesdropper would be unable to find
              the shared key, which is needed to use the inverse to decrypt the message.
            </p>
            <h2 className="title">History</h2>
            <p>
              ElGamal was published in 1985 by Taher Elgamal. While it is not nearly as
              popular as RSA, it can be favorable since its not patented and therefore
              cheaper to use. It can also be used in elliptic curve cryptology, which
              makes it ideal for being strong in situations where less computation is required.
            </p>
            <Link to="/">
              <Button style={btnStyle} text="Home" />
            </Link>
          </div>
          </>
        )}
      />

      <Route
        path='/masseyomura'
        render={(props) => (
          <>
          <div className="info">
            <Header title="Massey-Omura Encryption" />
            <h2 className="title">How To Use</h2>
            <p>
              Massey-Omura is another public key cryptosystem based on Diffie-Hellman.
              What sets this system apart is that it's a three pass protocol, meaning
              the message must pass between communicators three times before the it
              can be decrypted by the recipient. The encrypt option will output the message
              after all three passes have been performed while the decrypt option will
              take a message after three passes and decrypt it.
            </p>
            <p>
              Massey-Omura only requires one public parameter, which is the prime number.
              As for other parameters, each party only needs their own private encryption integer.
            </p>
            <p>
              This app uses the same encdoing system described in the RSA info page
              for Massey-Omura.
            </p>
            <h3>Encryption Parameters:</h3>
            <div className="list">
            <ul>
              <li>Plaintext - Text consisting of ASCII characters</li>
              <li>Prime Integer - Published publicly and usually very large</li>
              <li>Person A's Encryption Key - Encryption integer that is kept secret by Person A</li>
              <li>Person B's Encryption Key - Encryption integer that is kept secret by Person B</li>
            </ul>
            </div>
            <h3>Decryption Parameters:</h3>
            <div className="list">
            <ul>
              <li>Ciphertext - Sequence of numbers mod 128 separated by spaces</li>
              <li>Prime Integer - The prime number from the public key</li>
              <li>Person B's Encryption Key - Encryption integer that is kept secret by Person B</li>
            </ul>
            </div>
            <h2 className="title">Math</h2>
            <p>
              Using the example of Alice wanting to send a message to Bob, we will go through the full
              process of Massey-Omura. Before look at it mathematically, we will start
              with a real world intuitive example to illustrate the idea of the cryptosystem:
            </p>
            <div className="numbers">
            <ol>
              <li>Alice puts her message in a box and locks it. She send the box to Bob.</li>
              <li>Bob puts his own lock on the box and sends it back to Alice.</li>
              <li>Alice removes her lock and sends the box back to Bob.</li>
              <li>Bob removes his lock and can now open the box to retrieve the message.</li>
            </ol>
            </div>
            <p>
              Notice that throughout these three passes, the box remains locked. This example show how Massey-Omura works. Instead putting her message in a box, Alice
              will encode her message to an integer less than the chosen prime. Instead of using physical
              locks, Alice and Bob will lock their boxes mathematically with their encryption integers.
            </p>
            <p>
              To choose their encryption numbers, both Alice and Bob will go through the following steps:
            </p>
            <div className="numbers">
            <ol>
              <li>A public prime number <i>p</i> will be chosen.</li>
              <li>Both Alice and bob will choose an encryption integer <i>e</i> will be chosen such that <i>e</i> is less than <i>p</i> and <b>gcd(e, p-1) = 1</b>.</li>
            </ol>
            </div>
            <p>
              Now both Alice and Bob have their encryption numbers and have chosen a public key.
              Assume Alice's number is <i>e<sub>a</sub></i> and Bob's is <i>e<sub>b</sub></i>. Then the full process mathematically is as follows:
            </p>
            <div className="numbers">
            <ol>
              <li>Alice encodes her message as an integer <i>m</i>. She sends Bob <b>m<sub>1</sub> = m<sup>e<sub>a</sub></sup> (mod p)</b>.</li>
              <li>Bob sends Alice <b>m<sub>2</sub> = m<sub>1</sub><sup>e<sub>b</sub></sup> (mod p)</b></li>
              <li>Alice computes <i>d<sub>a</sub></i>, the inverse of <i>e<sub>a</sub></i> mod p-1. She sends Bob <b>m<sub>3</sub> = m<sub>2</sub><sup>d<sub>a</sub></sup> (mod p)</b></li>
              <li>Bob computes <i>d<sub>b</sub></i>, the inverse of <i>e<sub>b</sub></i> mod p-1. He computes <b>m<sub>3</sub><sup>d<sub>b</sub></sup> (mod p)</b>, which gives him the original message.</li>
            </ol>
            </div>
            <p>
              The full process of these passes gives us the expression <b>m<sup>e<sub>a</sub>e<sub>b</sub>d<sub>a</sub>d<sub>b</sub></sup> (mod p)</b>.
              The exponent can be rearranged as <b>e<sub>a</sub>d<sub>a</sub>e<sub>b</sub>d<sub>b</sub></b>.
              Then since <i>e<sub>a</sub></i> and <i>d<sub>a</sub></i> are inverses mod p-1,<br></br><b>e<sub>a</sub>d<sub>a</sub> &#8801; 1 (mod p-1)</b>.
              Then by definition of mod, <b>e<sub>a</sub>d<sub>a</sub> = (p-1)s + 1</b> for some integer <i>s</i>.
              Then <br></br> <b>m<sup>e<sub>a</sub>d<sub>a</sub>e<sub>b</sub>d<sub>b</sub></sup> &#8801; m<sup>(s(p-1) + 1)e<sub>b</sub>d<sub>b</sub></sup> &#8801; (m<sup>s(p-1) + 1</sup>)<sup>e<sub>b</sub>d<sub>b</sub></sup> &#8801; (m<sup>s(p-1)</sup>m)<sup>e<sub>b</sub>d<sub>b</sub></sup> &#8801; (m<sup>s(p-1)</sup>m)<sup>e<sub>b</sub>d<sub>b</sub></sup> &#8801; (1<sup>s</sup>m)<sup>e<sub>b</sub>d<sub>b</sub></sup> &#8801; (m)<sup>e<sub>b</sub>d<sub>b</sub></sup> (mod p)</b>.
              <br></br>This equation uses Fermat's Little Theorem and some algebra to simplify the expression to  <b>(m)<sup>e<sub>b</sub>d<sub>b</sub></sup> (mod p)</b>.
              Since <i>e<sub>b</sub></i> and <i>d<sub>b</sub></i> follow the same rules as <i>e<sub>a</sub></i> and <i>d<sub>a</sub></i>,
              the eqution is further simplified to <b>m<sup>e<sub>a</sub>e<sub>b</sub>d<sub>a</sub>d<sub>b</sub></sup> &#8801; m (mod p)</b>.
              Thus the method works and Bob ends up with the message.
            </p>
            <p>
              At any given pass, an eavesdropper may know the integers m<sup>e<sub>a</sub></sup>,
              m<sup>e<sub>b</sub></sup>, or m<sup>e<sub>a</sub>e<sub>b</sub></sup>.
              It is hard to find <i>e<sub>a</sub></i> or <i>e<sub>b</sub></i> given any of these
              integers since finding logarithms with large primes is hard. The is the same reason
              the Diffie-Hellman key exchange was secure.
            </p>
            <h2 className="title">History</h2>
            <p>
              Massey-Omura was patented in 1982 by James Massey and Jim K. Omura.
              It isn't very widely used, but like ElGamal, it is a prime candidate for
              being used with elliptic curve cryptography. 
            </p>
            <Link to="/">
              <Button style={btnStyle} text="Home" />
            </Link>
          </div>
          </>
        )}
      />

    </Router>
  );
}

const btnStyle = {
  backgroundColor: '#ff5e78',
  color: 'white',
  width: '85px',
  height: '40px',
  border: 'none',
  borderRadius: '4px',
  margin: '10px',
  cursor: 'pointer'
}


export default App;
