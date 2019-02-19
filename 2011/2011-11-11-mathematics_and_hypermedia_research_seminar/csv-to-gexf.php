<?
$c = mysql_connect('localhost', 'dev_ogd-finland', 'fmTUFbXc3a2mTcDa') or die(mysql_error());
mysql_select_db('dev_ogd-finland', $c) or die(mysql_error());
mysql_set_charset('utf8', $c);
/*
$row = 1;
if(($handle = fopen("ogd_finland_v3_stripped.csv", "r")) !== false) {
  while(($data = fgetcsv($handle, 0, ";")) !== false) {
    $num = count($data);
    // First line contains meta data
    if($row > 1) {
      // Convert slashes to dashes in timestamp and convert to more usable form
      $date_array1 = explode("/", $data[0]);
      $date_array2 = explode(" ", $date_array1[2]);
      $datetime = $date_array2[0]."-".$date_array1[0]."-".$date_array1[1]." ".$date_array2[1];
      // Create queries and put nodes into db
      if(!empty($data[1])) {
        $q = "INSERT INTO nodes(`name`, `type`, `datetime`) VALUES ('".$data[1]."', 'person', '".$datetime."');";
        mysql_query($q);
      }
      if(!empty($data[2])) {
        $q = "INSERT INTO nodes(`name`, `type`, `datetime`) VALUES ('".$data[2]."', 'thing', '".$datetime."');";
        mysql_query($q);
      }
      if(!empty($data[3])) {
        $q = "INSERT INTO nodes(`name`, `type`, `datetime`) VALUES ('".$data[3]."', 'thing', '".$datetime."');";
        mysql_query($q);
      }
      if(!empty($data[4])) {
        $q = "INSERT INTO nodes(`name`, `type`, `datetime`) VALUES ('".$data[4]."', 'thing', '".$datetime."');";
        mysql_query($q);
      }
      // Get person node id where the things attach
      $person_id = getNodeID($data[1]);
      // Create queries and put edges into db
      for($ii = 2; $ii < 5; $ii++) {
        $thing_id = getNodeID($data[$ii]);
        if(!empty($thing_id)) {
          $q = "INSERT INTO edges(`node_person_id`, `node_thing_id`, `datetime`) VALUES ('".$person_id."', '".$thing_id."', '".$datetime."');";
          mysql_query($q);
        }
      }
    }
    $row++;
  }
  fclose($handle);
}
*/
/*
<node id="0" label="Gephi" start="2009-03-01">
    <attvalues>
        <attvalue for="0" value="http://gephi.org"/>
        <attvalue for="2" value="1"/>
    </attvalues>
</node>
*/
// Create xml code for the nodes
$nodes = '';
$r = getNodes();
while(list($id, $name, $name_en, $type, $datetime) = mysql_fetch_row($r)) {
  // Explore date from datetime
  $name = empty($name_en) ? $name : $name_en;
  $datetime_parsed = explode(" ", $datetime);
  $nodes .= "<node id=\"$id\" label=\"$name\" start=\"{$datetime_parsed[0]}\">\n  <attvalues>\n    <attvalue for=\"0\" value=\"$type\" />\n  </attvalues>\n</node>\n";
}
echo $nodes;

/*
<edge id="0" source="0" target="1" start="2009-03-01"/>
*/
// Create xml code for the edges
$edges = '';
$r = getEdges();
while(list($id, $node_person_id, $node_thing_id, $datetime) = mysql_fetch_row($r)) {
  // Explore date from datetime
  $datetime_parsed = explode(" ", $datetime);
  $edges .= "<edge id=\"$id\" source=\"$node_person_id\" target=\"$node_thing_id\" start=\"{$datetime_parsed[0]}\"/>\n";
}
//echo $edges;

// Create edges between users who have mentioned the same thing
$edges_between_users = '';
// Get all things
$r = getNodes('thing');
$jj = 1000;
while(list($id, $name, $name_en, $type, $datetime) = mysql_fetch_row($r)) {
  // Get thing's edges
  $r1 = getEdges($id);
  //echo $id. ' '. mysql_num_rows($r1);
  //echo '<br />';
  $nodes_users = array();
  while(list($id, $node_person_id, $node_thing_id, $datetime) = mysql_fetch_row($r1)) {
    $q = "SELECT *
          FROM edges
          WHERE edges.node_thing_id = $node_thing_id
            AND edges.node_person_id != $node_person_id
          ORDER BY edges.`datetime` ASC";
    $r2 = mysql_query($q);
    while(list($id, $node_person_id2, $node_thing_id2, $datetime2) = mysql_fetch_row($r2)) {
      $edges_between_users .= "<edge id=\"$jj\" source=\"$node_person_id\" target=\"$node_person_id2\" start=\"{$datetime_parsed[0]}\"/>\n";
      $jj++;
    }
  }
}

//echo $edges_between_users;

function getNodeID($name) {
  $q = "SELECT nodes.`id` 
        FROM nodes
        WHERE nodes.`name`= '".mysql_real_escape_string($name)."';";
  list($node_id) = mysql_fetch_row(mysql_query($q));
  return $node_id;
}

function getNodes($type = '%') {
  $q = "SELECT *
        FROM nodes
        WHERE nodes.type LIKE '$type'
        ORDER BY nodes.`datetime` ASC";
  return mysql_query($q);
}

function getEdges($node_thing_id = '%', $node_person_id = '%') {
  $q = "SELECT *
        FROM edges
        WHERE edges.node_thing_id LIKE '$node_thing_id'
          AND edges.node_person_id LIKE '$node_person_id'
        ORDER BY edges.`datetime` ASC";
  return mysql_query($q);
}
mysql_close($c);
?>