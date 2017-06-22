<script>
var d = new Date();
document.getElementById("Date").innerHTML = d.toDateString();
</script>
<script type="text/javascript">
  var seconde=0;
  function chrono()
  {
    document.getElementById("mychrono").innerHTML=seconde+" "+"sec";
    seconde++;
  }
  setInterval(chrono, 1000);
</script>
