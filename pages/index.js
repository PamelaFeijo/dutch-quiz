import React from 'react';
import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import GitHubCorner from '../src/components/GitHubCorner';
import Footer from '../src/components/Footer';
import Head from 'next/head'
import { useRouter} from 'next/router';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

/* const BackgroundImage = styled.div `
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`; */


export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  console.log('retorno do useState', name, setName);

  return ( 
  <QuizBackground backgroundImage={db.bg}> 
    <Head>
      <title image={db.bg}>Dutch Quiz</title>     
    </Head>
    <QuizContainer>
      <QuizLogo>        
      </QuizLogo>
      <Widget>        
          <Widget.Header>
            <h1>Dutch Quiz</h1>            
          </Widget.Header> 
            <Widget.Content> 
              <form onSubmit={function (eventInfo){
              eventInfo.preventDefault();                     
              router.push(`/quiz?name=${name}`);
              console.log('Submit')
            }}
            >
                <input 
                  onChange={function (eventInfo){
                    console.log(eventInfo.target.value)
                    //State
                    //name = eventInfo.target.value;
                    setName(eventInfo.target.value)
                  }}
                placeholder="Tell me your name" />
                <button type="submit" disabled={name.length === 0}>
                  Play 
                  {name}
                </button>
              </form>
          </Widget.Content>
      </Widget>
      <Widget>
        <Widget.Content>
            <h1>Quiz</h1>
            <p>Lorem ipsum</p>
          </Widget.Content>
      </Widget>
      <Footer/>
    </QuizContainer>
    <GitHubCorner projectUrl="https://https://github.com/PamelaFeijo"  /> 
  </QuizBackground>
  )
}
