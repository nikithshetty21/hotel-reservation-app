import { render, fireEvent, screen } from "@testing-library/react";
import ResultTable from ".";
import React from 'react';
import { ReservationData } from "../../../Resources";



describe('Result Table', () => {
    
        render(<ResultTable setSelectedResult={ () => {}} handleOpen= {() => {}} searchResults={ [ReservationData[0]]}/>);
        it('renders Table', () => {
        
        // render the component on virtual dom
        
        
       
        expect(screen.getByText('First Name')).toBeInTheDocument();
        expect(screen.getByText('Last Name')).toBeInTheDocument();
        expect(screen.getByText('E-Mail')).toBeInTheDocument();
        expect(screen.getByText('Phone Number')).toBeInTheDocument();
        expect(screen.getByTestId('first-name')).toHaveTextContent('IDM');
        expect(screen.getByTestId('last-name')).toHaveTextContent('ENG')
        expect(screen.getByTestId('e-mail')).toHaveTextContent('idm.test@idm.com')
        expect(screen.getByTestId('phone-number')).toHaveTextContent('9999999999')
    
});
});