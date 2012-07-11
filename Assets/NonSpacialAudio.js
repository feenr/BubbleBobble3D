#pragma strict

function Start () {

}

function Update () {

}

function PlaySoundEffect(soundEffect: AudioClip){

    audio.clip = soundEffect;

    audio.Play();

}