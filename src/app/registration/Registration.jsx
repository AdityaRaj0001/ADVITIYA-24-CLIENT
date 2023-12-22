import React from 'react';
import './Registration.css'; // Import the registration.css file
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBSelect,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function App() {
  return (
    <MDBContainer fluid className='h-custom'>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12' className='m-5'>

          <MDBCard className='card-registration card-registration-2' style={{borderRadius: '15px'}}>

            <MDBCardBody className='p-0'>

              <MDBRow>

                <MDBCol md='6' className='p-5 bg-white'>

                  <h3 className="fw-normal mb-5" style={{color: '#4835d4'}}>Registration</h3>
                  <MDBSelect
                    className='mb-4'
                    size='lg'
                    data={[
                      { text: 'Year of Study', value: 1 },
                      { text: 'One', value: 2 },
                      { text: 'Two', value: 3 },
                      { text: 'Three', value: 4 },
                      { text: 'Four', value: 5 }
                    ]}
                    />

                  <MDBRow>

                    <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text'/>
                    </MDBCol>

                    <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form2' type='text'/>
                    </MDBCol>

                  </MDBRow>

                  <MDBSelect
                    className='mb-4'
                    size='lg'
                    data={[
                      { text: 'Gender', value: 1 },
                      { text: 'Male', value: 2 },
                      { text: 'Female', value: 3 },
                      { text: 'Other', value: 4 }
                    ]}
                    />
                  <MDBInput wrapperClass='mb-4' label='Institue Name' size='lg' id='form3' type='text'/>
                  <MDBInput wrapperClass='mb-4' label='Institue Address' size='lg' id='form4' type='text'/>
                  <MDBInput wrapperClass='mb-4' label='Institue Pin-Code' size='lg' id='form5' type='number'maxLength={6}/>

                  {/* <MDBRow>

                    <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' label='Bussines Arena' size='lg' id='form4' type='text'/>
                    </MDBCol>

                    <MDBCol md='6'>
                      <MDBSelect
                        className='mb-4'
                        size='lg'
                        data={[
                          { text: 'Employees', value: 1 },
                          { text: 'Two', value: 2 },
                          { text: 'Three', value: 3 },
                          { text: 'Four', value: 4 }
                        ]}
                        />
                    </MDBCol>

                  </MDBRow> */}

                </MDBCol>


                <MDBCol md='6' className='bg-indigo p-5'>

                  <h3 className="fw-normal mb-5 text-white" style={{color: '#4835d4'}}>Contact Details</h3>
                  <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Street + Nr' size='lg' id='form5' type='text'/>
                  <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Additional Information' size='lg' id='form6' type='text'/>

                  <MDBRow>

                    <MDBCol md='5'>
                      <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Pin Code' size='lg' id='form6' type='number'maxLength={6}/>
                    </MDBCol>

                    <MDBCol md='7'>
                      <MDBInput wrapperClass='mb-4' labelClass='text-white' label='City' size='lg' id='form7' type='text'/>
                    </MDBCol>

                  </MDBRow>

                  <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Country' size='lg' id='form8' type='text'/>

                  <MDBRow>

                    <MDBCol md='5'>
                      <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Code +' size='lg' id='form9' type='number' maxLength={10}/>
                    </MDBCol>

                    <MDBCol md='7'>
                      <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Phone Number' size='lg' id='form10' type='number' maxLength={10}/>
                    </MDBCol>
                  </MDBRow>

                  <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Your Email' size='lg' id='form8' type='email'/>
                  <MDBCheckbox name='flexCheck' id='flexCheckDefault' labelClass='text-white mb-4' label='I do accept the Terms and Conditions of your site.' />
                  <MDBBtn color='light' size='lg'>Register</MDBBtn>

                </MDBCol>
              </MDBRow>

            </MDBCardBody>

          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default App;