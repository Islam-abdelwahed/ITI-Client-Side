# Lab 2: HTML Tables and Forms

## Lab Objectives
- Build complex table structures: Nested tables, rowspan/colspan, borders, alignments.
- Create forms with inputs (text, password, radio), submit buttons, and placeholders.
- Practice layout with tables for data presentation (e.g., timetables, device specs).
- Include external links, downloads, and communication protocols (tel, sms, wa.me).

Tasks (from provided images and solutions):
1. Nested table for favorites (colors/flavors).
2. External links table for downloads, calls, messages, WhatsApp.
3. Nested table for device specs (smartphone, laptop, tablet).
4. Timetable with rowspan for hours and colspan for lunch/project.
5. Registration form with fields, radio buttons, and submit.
- ass 1.txt: Table with links for messages, calls, WhatsApp, downloads.

## Project Structure
```
lab-02/
├── task2.html       # Nested favorites table
├── task3.html       # Nested device specs table
├── task4.html       # Timetable with spans
├── task5.html       # Registration form
├── External.html    # External links table (downloads, calls, etc.)
├── ass 1.txt        # Task description for links table
└── README.md        # This file
```

## Key Highlights
Here are snippets from standout tasks. Open .html files in a browser to view.

### Task 3: Nested Table for Device Specs
```html
<Table align="center" border="2">
    <tr bgcolor="cyan">
        <th>Device</th>
        <th>Brand</th>
        <th>specifications</th>
    </tr>
    <tr>
        <td>smartphone</td>
        <td>apple</td>    
        <td>
            <table border="2">
                <tr bgcolor="yellow">
                    <th>Model</th>
                    <th>Storage</th>
                </tr>
                <tr>
                    <td>ihpone 12 pro</td>
                    <td>256GB</td>
                </tr>
                <tr>
                    <td>ihpone Se</td>
                    <td>128GB</td>
                </tr>
            </table>
        </td>
    </tr>
    <!-- More rows for laptop, tablet -->
</Table>
```

   **Explanation**: Outer table for devices; nested inner table for specs per brand.  
   **Sample Output**: (See provided nested table screenshot.)

### Task 4: Timetable with Rowspan/Colspan
```html
<Table align="center" border="2">
    <tr>
        <th colspan="6">Time Table</th>
    </tr>
    <tr>
        <th rowspan="6">Hours</th>
        <th>Mon</th>
        <th>Tue</th>
        <th>Wed</th>
        <th>Thu</th>
        <th>Fri</th>
    </tr>
    <!-- Rows with subjects -->
    <tr><th colspan="5">Lunch</th></tr>
    <!-- More rows with spans for Project -->
</Table>
```

   **Explanation**: Rowspan for "Hours" spanning multiple rows; colspan for "Lunch" and "Project".  
   **Sample Output**: (See provided timetable screenshot.)

### Task 5: Registration Form
```html
<form method="get" action="server.html">
    <Table align="center" width="400">
        <tr align="left">
            <th>Fullname</th>
            <th>Username</th>
        </tr>
        <tr>
            <td><input type="text" placeholder="Enter Your Name" name="usr"/></td>
            <td><input type="text" placeholder="Enter Your Username" name="usrname"/></td>
        </tr>
        <!-- More fields: Email, Phone, Password, Confirm -->
        <tr align="left" colspan="2"><th>Gender</th></tr>
        <tr>
            <td><input type="radio" name="gender">Male</input> <input type="radio" name="gender">Female</input></td>
            <td><input type="radio" name="gender">Prefer not to say</input></td>
        </tr>
        <tr bgcolor="orange">
            <th colspan="2"><input type="submit" name="register" value="Register"></th>
        </tr>
    </Table>
</form>
```

   **Explanation**: Table-based form layout with text inputs, passwords, radios, and submit.  
   **Sample Output**: (See provided registration form screenshot.)

## Notes
- Tables used for layout (educational; modern CSS grids/flex preferred).
- External.html demonstrates protocol links (tel:, sms:, wa.me).
- Test in browser; form submits to placeholder "server.html".

Expanding HTML skills with structured data and interactions! 🚀