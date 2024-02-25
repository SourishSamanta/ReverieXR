import React from "react";
import {
    Button,
    Calendar,
    CalendarCell,
    CalendarGrid,
    Heading,
} from "react-aria-components";

function CalenderComponent() {
    return (
        <div>
            <Calendar aria-label="Appointment date">
                <header>
                    <Button slot="previous">◀</Button>
                    <Heading />
                    <Button slot="next">▶</Button>
                </header>
                <CalendarGrid>
                    {(date) => <CalendarCell date={date} />}
                </CalendarGrid>
            </Calendar>
        </div>
    );
}

export default CalenderComponent;
