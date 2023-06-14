import React, { useMemo ,useState} from 'react';

export const MemoCard = React.memo(({ title ,image }) => {
     return(
            <div className="card">
                <img src={image} width={900}></img>
                <h1>{title}</h1>
            </div>
     );
});

 const Card = ({ title ,image }) => {
    const [prime, setPrime] = useState(0);
    const myComponent = useMemo(() => {
 
           const isPrime = (num) => {
            for(let i = 2; i < num; i++)
              if(num % i === 0) return false;
            return num > 1;
          }
          for(let i = 0; i < 10000; i++){
            if(isPrime(i)) {
                setPrime(i);
                console.log(prime);
            }
          }
          console.log('done');

        return (
                <div>
                    <h1>
                        {title}
                    </h1>
                    <img src={image} width={900}></img>
                </div>
        )
    }, [title, image]);
    return <div>{myComponent}</div>


};

export default Card;