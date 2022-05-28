import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import ErrorAlert from "../layout/ErrorAlert"
import { createReservation, editReservation, listReservations } from "../utils/api"
import ReservationForm from "./ReservationForm"

export default function EditReservation({ loadDashboard, edit }) {
    return (
        <div>
            <h1>Edit Reservation</h1>
            <ReservationForm loadDashboard={loadDashboard} edit={edit} />
        </div>
    )
}
