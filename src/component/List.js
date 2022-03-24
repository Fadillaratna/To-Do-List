import React, { Component } from 'react'
import $ from 'jquery'

export default class List extends Component {
    constructor() {
        super()
        this.state = {
            agenda: [
                {
                    id: "!", event: "National Ocean Day", date: "2022-01-15", status: "not completed",
                },
                {
                    id: "2", event: "World Wetlands Day", date: "2022-02-02", status: "not completed",
                },
                {
                    id: "3", event: "National Garbage Care Day", date: "2022-02-21", status: "not completed",
                },
            ],

            action: "",
            id: "",
            event: "",
            date: "",
            status: "",
            // selectedItem: null,
        }
        this.state.filterAgenda = this.state.agenda
    }

    Add = () => {
        $("#modal").show()
        // menampilkan komponen modal
        // $("#modal").modal("show")
        this.setState({
            id: Math.random(1, 10000000),
            event: "",
            date: "",
            status: false,
            action: "insert"
        })
    }

    Edit = (item) => {
        $("#modal").show()
        // menampilkan komponen modal
        // $("#modal").modal("show")
        this.setState({
            id: item.id,
            event: item.event,
            date: item.date,
            action: "update",
            selectedItem: item
        })
    }

    Save = (event) => {
        event.preventDefault();
        // menampung data state buku
        let tempAgenda = this.state.agenda

        if (this.state.action === "insert") {
            // menambah data baru
            tempAgenda.push({
                id: this.state.id,
                event: this.state.event,
                date: this.state.date
            })
        } else if (this.state.action === "update") {
            // menyimpan perubahan data
            let index = tempAgenda.indexOf(this.state.selectedItem)
            tempAgenda[index].id = this.state.id
            tempAgenda[index].event = this.state.event
            tempAgenda[index].date = this.state.date
        }

        this.setState({ agenda: tempAgenda })

        // menutup komponen modal_buku
        $("#modal").hide()
    }

    Drop = (index) => {
        // beri konfirmasi untuk menghapus data
        if (window.confirm("AAre you sure to delete thid to do list?")) {
            // menghapus data
            let temp = this.state.agenda;
            // hapus data
            temp.splice(index, 1);
            this.setState({ agenda: temp });
        }
    }

    Close = () => {
        $("#modal").hide()
    }

    Set = (item) => {

        let tempAgenda = this.state.agenda
        let index = tempAgenda.indexOf(item)
        if (tempAgenda[index].status === "not completed") {
            tempAgenda[index].status = "completed"
        }
        else if (tempAgenda[index].status === "completed") {
            tempAgenda[index].status = "not completed"
        }
        this.setState({
            agenda: tempAgenda
        })
    }

    searching = event => {
        if (event.keyCode === 13) {
            // 13 adalah kode untuk tombol enter

            let keyword = this.state.keyword.toLowerCase()
            let tempAgenda = this.state.agenda
            let result = tempAgenda.filter(item => {
                return item.event.toLowerCase().includes(keyword) ||
                    item.status.toLowerCase().includes(keyword) 
            })

            this.setState({ filterAgenda: result })
        }
    }

    render() {
        return (
            <div>
                <div className="dashboard ms-5 text-start">
                    <br /><br /><br /><br /><br /><br />
                    <h5 className="card-title display-3 fw-bolder mb-0">LIST YOUR ACTS</h5>
                    <p className="card-text lead fs-2 mb-3">manage your environment day agenda here!</p>
                    <div className="input">
                        <input type="text" className="form-control my-2 rounded mb-3" id="search" placeholder="Search your agenda..."
                            value={this.state.keyword}
                            onChange={ev => this.setState({ keyword: ev.target.value })}
                            onKeyUp={ev => this.searching(ev)}
                        />
                    </div>
                    <ul className="list-group">
                        {this.state.filterAgenda.map((item, index) => (
                            <li className="list-group-item gap-3" key={index}>
                                <div class="group">
                                    <span className="pt-1 form-checked-content">
                                        <strong>{item.event}</strong>
                                        <small className="d-block text-muted">
                                            <i class="fa fa-calendar me-2" id="calender"></i>{item.date}
                                        </small>
                                    </span>
                                </div>
                                <div id="btn-group">
                                    <button className="btn btn-sm btn-dark m1 me-1" id="light" data-toggle="modal" data-target="#modal" onClick={() => this.Edit(item)}><i className="fa fa-pencil"></i></button>
                                    <button className="btn btn-sm btn-dark m1" id="dark"><i className="fa fa-trash" onClick={() => this.Drop(index)}></i></button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <button type="button" className="btn btn-sm btn-dark mt-2" id="light" onClick={() => this.Add()}>Add List</button>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                </div>

                <div className="modal" id="modal">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title"><b>To Do List</b></h4>
                                <button type="button" class="btn-close" data-dismiss="modal" onClick={() => this.Close()}></button>
                            </div>
                            <div class="modal-body text-start">
                                <form onSubmit={ev => this.Save(ev)}>
                                    Event
                                    <input type="text" className="form-control mb-2"
                                        value={this.state.event}
                                        onChange={ev => this.setState({ event: ev.target.value })}
                                        required />

                                    Date
                                    <input type="date" className="form-control mb-2"
                                        value={this.state.date}
                                        onChange={ev => this.setState({ date: ev.target.value })}
                                        required />

                                    <button className="btn btn-dark btn-block" type="submit" id="light">
                                        Save
                                    </button>
                                </form>
                                <br></br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
