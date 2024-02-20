import React from "react";

class ContactInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            tag: '',
        }

        this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
        this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onNameChangeEventHandler (event) {
        this.setState(() => {
            return {
                name: event.target.value
            }
        });
    };

    onTagChangeEventHandler(event) {
        this.setState(() => {
          return {
            tag: event.target.value,
          }
        });
      }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addContact(this.state);
    }      

    render() {
        return (
            <form className="flex flex-col gap-4" onSubmit={this.onSubmitEventHandler}>
                <input className="input input-bordered" type="text" placeholder="Nama" value={this.state.name} onChange={this.onNameChangeEventHandler}/>
                <input className="input input-bordered" type="text" placeholder="Tag" value={this.state.tag} onChange={this.onTagChangeEventHandler}/>
                <button className="btn" type="submit">Tambah</button>
            </form>
        )
    }
}

export default ContactInput