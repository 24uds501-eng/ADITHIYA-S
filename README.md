# Script-Controlled ACL – ServiceNow

## Project Overview

This project demonstrates a Script-Controlled Access Control List (ACL) in ServiceNow.

The ACL restricts users from viewing records based on their role and the Branch field value.

## Objective

Allow users with the `bb1` role to access EEE branch records while preventing unauthorized users from viewing the records.

Administrators retain full access.

## Technologies

- ServiceNow
- Access Control Lists (ACL)
- ServiceNow Scripting
- JavaScript
- User Roles
- Record-level Security

## Custom Table

**Table Label:** Institution Details

**Table Name:** `u_institution_details`

## Fields

| Field | Type |
|---|---|
| Student Roll Number | Auto Number |
| Student Name | Reference - User |
| Faculty Name | Reference - User |
| Branch | Choice |
| Email | String |
| Phone Number | String |
| Description | Multi String |

## Branch Values

- ECE
- EEE
- CSE

## Roles

| Role | Permission |
|---|---|
| bb1 | READ |
| bb2 | CREATE |
| bb3 | WRITE |
| bb4 | DELETE |

## READ ACL

- **Operation:** Read
- **Table:** `u_institution_details`
- **Role:** bb1
- **Data condition:** Branch is EEE
- **Advanced:** true

### READ ACL Script

```javascript
(function () {

    // Allow admin users full access
    if (gs.hasRole('admin')) {
        return true;
    }

    // Allow users with bb1 role
    if (gs.hasRole('bb1')) {
        return true;
    }

    // Deny access for all others
    return false;

})();
