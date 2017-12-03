import React , {Component} from 'react' ;


class Memes extends Component{
  constructor(props){
    super(props);
    this.state ={
      image :[],
      q: undefined,
    };
    this.whenClicked = this.whenClicked.bind(this)
  }

  whenClicked (q){
      let query = null;
    if (!q || q == '') {
      query = this.props.q;
    } else {
      query = q;
    }


      return fetch(`https://api.giphy.com/v1/gifs/search?api_key=3rz853NZ8nXxHDGYWxNypsuwDVu1ETTn&q=${query}&limit=5&offset=0&rating=G&lang=en`)
        .then((response) => response.json())
        .then((response) => {
          //console.log(response);
          const image = response.data.map(obj =>"https://giphy.com/embed/" + obj.id)
          this.setState({image});
        //  console.log(this.state.image);
;        })
        .catch((error) => {
          console.error(error);
        });

}
handleSubmit = (event) => {
  event.preventDefault();

  this.whenClicked(event.target.search.value);
};




        render() {

          return (
            <div className ="rendering">
            <div>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="search"
                placeholder="Search"
              />
            </form>

            {
              this.state.image.map((link , i) =>{

                var frame =<div key ={i} className="mymeme"> <iframe width="250" height="250" frameBorder="0" src={link} ></iframe></div>
                  return frame ;
              } )
            }
            {this.frame}



          </div>
</div>


        );
  }

    }


export default Memes;
