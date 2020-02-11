import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {useDispatch, useSelector} from "react-redux";
import {TextareaAutosize} from "@material-ui/core";
import "./style.css"
import {actions} from "../../store/github.duck";

export default function FormDialog() {

    const dispatch = useDispatch();

    const open = useSelector(state => state.github.dialogOpen);

    const author = useSelector(state => state.github.author);
    const authorImage = useSelector(state => state.github.authorImage);
    const social = useSelector(state => state.github.social);
    const codeType = useSelector(state => state.github.codeType);
    const description = useSelector(state => state.github.description);
    const repository = useSelector(state => state.github.repository);
    const organization = useSelector(state => state.github.organization);

    const [authorLocal, setAuthor] = React.useState(author);
    const [authorImageLocal, setAuthorImage] = React.useState(authorImage);
    const [socialLocal, setSocial] = React.useState(social);
    const [codeTypeLocal, setCodeType] = React.useState(codeType);
    const [descriptionLocal, setDescription] = React.useState(description);
    const [repositoryLocal, setRepository] = React.useState(repository);
    const [organizationLocal, setOrganization] = React.useState(organization);

    const handleSave = () => {
        dispatch(actions.setGithub(organizationLocal, descriptionLocal, repositoryLocal, authorLocal, authorImageLocal, codeTypeLocal, socialLocal));
        dispatch(actions.toogleDialog(false));
    };

    const handleClose = () => {
        dispatch(actions.toogleDialog(false));
    };

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Repository</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please fill the form bellow to change the github repository.
                    </DialogContentText>
                    <TextField
                        margin="dense"
                        id="author"
                        label="Author"
                        type="text"
                        fullWidth
                        value={authorLocal}
                        onChange={e => {
                            setAuthor(e.target.value)
                        }}
                    />
                    <TextField
                        margin="dense"
                        id="authorImage"
                        label="Author Image"
                        type="text"
                        fullWidth
                        value={authorImageLocal}
                        onChange={e => {
                            setAuthorImage(e.target.value)
                        }}
                    />
                    <TextField
                        margin="dense"
                        id="social"
                        label="Author Social"
                        type="text"
                        fullWidth
                        value={socialLocal}
                        onChange={e => {
                            setSocial(e.target.value)
                        }}
                    /><TextField
                    margin="dense"
                    id="social"
                    label="Code Type"
                    type="text"
                    fullWidth
                    value={codeTypeLocal}
                    onChange={e => {
                        setCodeType(e.target.value)
                    }}
                />
                    <TextField
                        margin="dense"
                        id="description"
                        label="Description"
                        type="text"
                        fullWidth
                        value={descriptionLocal}
                        onChange={e => {
                            setDescription(e.target.value)
                        }}
                    />
                    <TextField
                        margin="dense"
                        id="org"
                        label="Organization"
                        type="text"
                        fullWidth
                        value={organizationLocal}
                        onChange={e => {
                            setOrganization(e.target.value)
                        }}
                    />
                    <TextField
                        margin="dense"
                        id="repo-name"
                        label="Repository Name"
                        type="text"
                        fullWidth
                        value={repositoryLocal}
                        onChange={e => {
                            setRepository(e.target.value)
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSave} color="primary">
                        Change Repository
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
