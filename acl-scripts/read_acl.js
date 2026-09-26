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
