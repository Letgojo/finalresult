
import './App.css';
import React from 'react';
import Hamburger from 'hamburger-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import { faBus } from '@fortawesome/free-solid-svg-icons';
import { faCarSide } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faHotel } from '@fortawesome/free-solid-svg-icons';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { faPersonWalkingLuggage } from '@fortawesome/free-solid-svg-icons';
import { faPersonSwimming } from '@fortawesome/free-solid-svg-icons';
import { faPersonHiking } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons';
import { faBowlRice} from '@fortawesome/free-solid-svg-icons';





function App() {
  return (

    <><><header>
      <Hamburger
        direction='left'
        display='flex' />
    </header>
      <div style={{
        display: 'flex',
        backgroundColor: "black",
        height: "1px",
        marginTop: "40px",
      }} /></>
      <div >
        <p style={{
          fontSize: "25px",
          display: "flex",
          marginTop: 10,
          marginLeft: 20,
        }}>
          여행 프로필
        </p>

      </div>
      <div style={{
        backgroundColor: 'white',
        position: 'absolute',
        borderRadius: 30,
        border: '1px solid black',
        minHeight: 650,
        padding: 12,
        marginLeft: 50,
        marginTop: 10,
        width: 1350,      
      }}>
        <div>
          <FontAwesomeIcon icon={faUser} style={{
            fontSize: 30,
            color: "blue",
          marginTop: 10,
          marginLeft: 50}}
          />
          <p style={{
            fontSize: 15,
            display: "flex",
            marginLeft: 80,
            marginTop: -15,
          }}>
            인원 - <span style={{
              fontWeight: 'bold',
              marginLeft: 10,
              fontSize: 25,
              marginTop: -9
            }}>1명</span>
          </p>

        </div >
        <div style={{
            display: "flex",
            marginLeft: 50,
            marginTop: -35,
            
          }}>
          <label style={{
            marginTop: -25,
            marginLeft: 150

            
          }}>출발</label>
          <input type="date"/>
        </div>
         <div style={{
            display: "flex",
            marginLeft: 300,
            marginTop: -21,
          }}>
          <label style={{
            marginLeft: 100,
            marginTop: -25,
            
          }}>토착</label>
          <input type="date"/>
        </div>
        <div style={{
        backgroundColor: '#B5B5B5',
        position: 'absolute',
        border: '1px solid black',
        borderRadius: 30,
        height: 10,
        padding: 10,
        marginTop: 30,
        marginLeft: 40,
        width: 80,      
      }}>
          <p style={{
            fontSize: "15px",
            fontWeight: 'bold',
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: -4,
          marginLeft: 0,
        }}>출발지</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faRightLong} style={{
            fontSize: 50,
            color: "red",
          marginTop: 40,
          marginLeft: 250,
          display: "flex",
          
          }}
          />
        </div>
        <div style={{
        backgroundColor: '#B5B5B5',
        position: 'absolute',
        border: '1px solid black',
        borderRadius: 30,
        height: 10,
        padding: 10,
        marginTop: -55,
        marginLeft: 400,
        width: 80,      
      }}>
          <p style={{
          fontSize: "15px",
          fontWeight: 'bold',
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: -4,
          marginLeft: 0,
        }}>도착지</p>
        </div>
        <div>
          <p style={{
          fontSize: "20px",
          display: "flex",
          marginTop: -4,
          marginLeft: 45,
        }}>대구 달서구</p>
        </div>
        <div>
          <p style={{
          fontSize: "20px",
          display: "flex",
          marginTop: -40,
          marginLeft: 405,
        }}>부산 해운대</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faBus} style={{
            fontSize: 30,
            color: "green",
          marginTop: 0,
          marginLeft: 50}}
          />
          <p style={{
            fontSize: 20,
            display: "flex",
            marginLeft: 90,
            marginTop: -20,
          }}>교통수단</p>
        </div>
        <div style={{
        backgroundColor: '#B5B5B5',
        position: 'absolute',
        border: '1px solid black',
        borderRadius: 30,
        height: 10,
        padding: 10,
        marginTop: -15,
        marginLeft: 85,
        width: 60,      
      }}>
          <FontAwesomeIcon icon={faCarSide} style={{
            fontSize: 20,
            color: "#075B5A",
          marginTop: -10,
          marginLeft: 5}}
          />
          <p style={{
            fontSize: 15,
            display: "flex",
            marginLeft: 35,
            marginTop: -20,
          }}>차</p>

        </div>
        <div>
          <FontAwesomeIcon icon={faHouse} style={{
          fontSize: 30,
          color: "#650E96",
          marginTop: 25,
          marginLeft: 50}}
          />
          <p style={{
            fontSize: 20,
            display: "flex",
            marginLeft: 90,
            marginTop: -20,
          }}>숙소</p>
        </div>
        <div style={{
        backgroundColor: '#B5B5B5',
        position: 'absolute',
        border: '1px solid black',
        borderRadius: 30,
        height: 10,
        padding: 10,
        marginTop: -15,
        marginLeft: 85,
        width: 70,      
      }}>
          <FontAwesomeIcon icon={faHotel} style={{
            fontSize: 20,
            color: "yellow",
          marginTop: -10,
          marginLeft: 5}}
          />
          <p style={{
            fontSize: 15,
            display: "flex",
            marginLeft: 35,
            marginTop: -20,
          }}>호텔</p>
          <FontAwesomeIcon icon={faAdd} style={{
          backgroundColor: 'green',
          position: 'absolute',
          border: 'solid',
          borderRadius: 30,
          fontSize: 10,
          color: "white",
          display: "flex",
          marginTop: -30,
          marginLeft: 100}}
          />

        </div>
        <div>
          <FontAwesomeIcon icon={faPersonWalkingLuggage} style={{
          fontSize: 30,
          color: "#78BF8D",
          marginTop: 25,
          marginLeft: 50}}
          />
          <p style={{
            fontSize: 20,
            display: "flex",
            marginLeft: 90,
            marginTop: -20,
          }}>체험</p>
        </div>
        <div style={{
        backgroundColor: '#B5B5B5',
        position: 'absolute',
        border: '1px solid black',
        borderRadius: 30,
        height: 10,
        padding: 10,
        marginTop: -15,
        marginLeft: 85,
        width: 120,      
      }}>
          <FontAwesomeIcon icon={faPersonSwimming} style={{
            fontSize: 20,
            color: "#1DAAFB",
          marginTop: -10,
          marginLeft: 5}}
          />
          <p style={{
            fontSize: 15,
            display: "flex",
            marginLeft: 35,
            marginTop: -20,
          }}>수상레포츠</p>
          <FontAwesomeIcon icon={faCircleXmark} style={{
          backgroundColor: 'white',
          position: 'absolute',
          border: 'solid',
          borderRadius: 20,
          fontSize: 8,
          color: "black",
          display: "flex",
          marginTop: -30,
          marginLeft: 115}}
          />
          
          <div style={{
        backgroundColor: '#B5B5B5',
        position: 'absolute',
        border: '1px solid black',
        borderRadius: 30,
        height: 10,
        padding: 10,
        marginTop: -40,
        marginLeft: 150,
        width: 80,      
      }}>
            <FontAwesomeIcon icon={faPersonHiking} style={{
            fontSize: 20,
            color: "black",
            marginTop: -10,
            marginLeft: 5}}
          />
          <p style={{
            fontSize: 15,
            display: "flex",
            marginLeft: 35,
            marginTop: -20,
            }}>등산</p>
            <FontAwesomeIcon icon={faCircleXmark} style={{
          backgroundColor: 'white',
          position: 'absolute',
          border: 'solid',
          borderRadius: 20,
          fontSize: 8,
          color: "black",
          display: "flex",
          marginTop: -30,
          marginLeft: 75}}
          />

          </div>
          
          
          <FontAwesomeIcon icon={faAdd} style={{
          backgroundColor: 'green',
          position: 'absolute',
          border: 'solid',
          borderRadius: 30,
          fontSize: 10,
          color: "white",
          display: "flex",
          marginTop: -30,
          marginLeft: 280}}
          />

        </div>
        <div>
          <FontAwesomeIcon icon={faUtensils} style={{
          fontSize: 30,
          color: "purple",
          marginTop: 25,
          marginLeft: 50}}
          />
          <p style={{
            fontSize: 20,
            display: "flex",
            marginLeft: 90,
            marginTop: -20,
          }}>맛집</p>
        </div>
        <div style={{
        backgroundColor: '#B5B5B5',
        position: 'absolute',
        border: '1px solid black',
        borderRadius: 30,
        height: 10,
        padding: 10,
        marginTop: -15,
        marginLeft: 85,
        width: 80,      
      }}>
          <FontAwesomeIcon icon={faPizzaSlice} style={{
            fontSize: 20,
            color: "orange",
          marginTop: -10,
          marginLeft: 5}}
          />
          <p style={{
            fontSize: 15,
            display: "flex",
            marginLeft: 35,
            marginTop: -20,
          }}>양식</p>
          <FontAwesomeIcon icon={faCircleXmark} style={{
          backgroundColor: 'white',
          position: 'absolute',
          border: 'solid',
          borderRadius: 20,
          fontSize: 8,
          color: "black",
          display: "flex",
          marginTop: -30,
          marginLeft: 75}}
          />
          
          <div style={{
        backgroundColor: '#B5B5B5',
        position: 'absolute',
        border: '1px solid black',
        borderRadius: 30,
        height: 10,
        padding: 10,
        marginTop: -40,
        marginLeft: 110,
        width: 80,      
      }}>
            <FontAwesomeIcon icon={faBowlFood} style={{
            fontSize: 20,
            color: "black",
            marginTop: -10,
            marginLeft: 5}}
          />
          <p style={{
            fontSize: 15,
            display: "flex",
            marginLeft: 35,
            marginTop: -20,
            }}>한식</p>
            <FontAwesomeIcon icon={faCircleXmark} style={{
          backgroundColor: 'white',
          position: 'absolute',
          border: 'solid',
          borderRadius: 20,
          fontSize: 8,
          color: "black",
          display: "flex",
          marginTop: -30,
          marginLeft: 75}}
          />

          </div>
          <div style={{
        backgroundColor: '#B5B5B5',
        position: 'absolute',
        border: '1px solid black',
        borderRadius: 30,
        height: 10,
        padding: 10,
        marginTop: -40,
        marginLeft: 230,
        width: 80,      
      }}>
            <FontAwesomeIcon icon={faBowlRice} style={{
            fontSize: 20,
            color: "black",
            marginTop: -10,
            marginLeft: 5}}
          />
          <p style={{
            fontSize: 15,
            display: "flex",
            marginLeft: 35,
            marginTop: -20,
            }}>중식</p>
            <FontAwesomeIcon icon={faCircleXmark} style={{
          backgroundColor: 'white',
          position: 'absolute',
          border: 'solid',
          borderRadius: 20,
          fontSize: 8,
          color: "black",
          display: "flex",
          marginTop: -30,
          marginLeft: 75}}
          />

          </div>
          
          
          
          <FontAwesomeIcon icon={faAdd} style={{
          backgroundColor: 'green',
          position: 'absolute',
          border: 'solid',
          borderRadius: 30,
          fontSize: 10,
          color: "white",
          display: "flex",
          marginTop: -30,
          marginLeft: 360}}
          />

        </div>

        <div style={{
        backgroundColor: 'red',
        position: 'absolute',
        border: '1px solid black',
        
        borderRadius: 30,
        height: 10,
        padding: 10,
        marginTop: 100,
        marginLeft: 450,
        width: 80,      
      }}>
          <p style={{
          fontSize: "15px",
          fontWeight: 'bold',
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: -4,
          marginLeft: 0,
        }}>최소</p>
        </div>
        <div style={{
        backgroundColor: 'green',
        position: 'absolute',
        border: '1px solid black',
        
        borderRadius: 30,
        height: 10,
        padding: 10,
        marginTop: 100,
        marginLeft: 650,
        width: 80,      
      }}>
          <p style={{
          fontSize: "15px",
          fontWeight: 'bold',
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: -4,
          marginLeft: 0,
        }}>계속하다</p>
        </div>
        



        
        
      </div>
    </>

      
      




    
    
  );
}

export default App;
