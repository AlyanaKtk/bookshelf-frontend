import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';

class BookList extends Component {

    constructor(props) {
        super(props);
        this.state = {books: []};
        this.remove = this.remove.bind(this);
    }
    componentDidMount() {
        fetch('/books/')
            .then(response => response.json())
            .then(data => this.setState({books: data}));
    }
    async remove(id) {
        await fetch(`/books/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedBooks = [...this.state.books].filter(i => i.book_id !== id);
            this.setState({books: updatedBooks});
        });
    }
    render() {
        const {books} = this.state;

        const bookList = books.map(bookDTO => {
            return <tr key={bookDTO.book_id}>
                <td style={{whiteSpace: 'nowrap'}}>{bookDTO.title}</td>
                <td>{bookDTO.author}</td>
                <td>{bookDTO.pages}/5</td>
                <td>{bookDTO.rating}/5</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/books/" + bookDTO.book_id}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(bookDTO.book_id)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/books/new">Add Book</Button>
                    </div>
                    <h3>Book</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="30%">Title</th>
                            <th width="30%">Author</th>
                            <th width="20%">Pages</th>
                            <th width="20%">Rating</th>
                        </tr>
                        </thead>
                        <tbody>
                        {bookList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default BookList;